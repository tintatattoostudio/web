import Axios, { AxiosError } from "axios";
import { z } from "zod";
import {
  CareBaseSchema,
  FAQSchema,
  LandingBaseSchema,
  InstructionsBaseSchema,
  ArtistSchema,
  type Care,
  type FAQSection,
  type Landing,
  type Instructions,
  type Artist,
} from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

const axiosInstance = Axios.create({
  baseURL: API_URL,
});

export class APIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public cause?: unknown
  ) {
    super(message);
    this.name = "APIError";
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public issues: z.ZodIssue[]
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

function parseResponse<T>(schema: z.ZodSchema<T>, data: unknown, endpoint: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`Validation failed for ${endpoint}:`, result.error.issues);
    throw new ValidationError(
      `Invalid response from ${endpoint}`,
      result.error.issues
    );
  }
  return result.data;
}

async function fetchWithErrorHandling<T>(
  fetcher: () => Promise<T>,
  endpoint: string
): Promise<T> {
  try {
    return await fetcher();
  } catch (error) {
    if (error instanceof ValidationError) throw error;

    if (error instanceof AxiosError) {
      throw new APIError(
        error.response?.data?.error?.message ?? error.message ?? `Failed to fetch ${endpoint}`,
        error.response?.status,
        error
      );
    }

    throw new APIError(`Unexpected error fetching ${endpoint}`, undefined, error);
  }
}

const ArtistsResponseSchema = z.object({
  data: z.array(ArtistSchema),
});

export default class API {
  static getImageUrl(url: string | undefined): string {
    if (!url) return "";
    return API_URL + url;
  }

  static async getArtistGallery(artist: string, en: boolean): Promise<Artist | undefined> {
    const locale = en ? "&locale=en" : "";
    const endpoint = `/galleries?filters[artist][$eq]=${artist}&populate=deep${locale}`;

    return fetchWithErrorHandling(async () => {
      const response = await axiosInstance.get(endpoint);
      const parsed = parseResponse(ArtistsResponseSchema, response.data, endpoint);
      return parsed.data.at(0);
    }, endpoint);
  }

  static async getFAQ(en: boolean): Promise<FAQSection[]> {
    const locale = en ? "&locale=en" : "";
    const endpoint = `/faq?populate=deep${locale}`;

    return fetchWithErrorHandling(async () => {
      const response = await axiosInstance.get(endpoint);
      const parsed = parseResponse(FAQSchema, response.data, endpoint);
      return parsed.data.attributes.section;
    }, endpoint);
  }

  static async getCare(en: boolean): Promise<Care> {
    const locale = en ? "&locale=en" : "";
    const endpoint = `/care?populate=deep${locale}`;

    return fetchWithErrorHandling(async () => {
      const response = await axiosInstance.get(endpoint);
      const parsed = parseResponse(CareBaseSchema, response.data, endpoint);
      return parsed.data.attributes;
    }, endpoint);
  }

  static async getInstructions(en: boolean): Promise<Instructions> {
    const locale = en ? "&locale=en" : "";
    const endpoint = `/pretattoo?populate=deep${locale}`;

    return fetchWithErrorHandling(async () => {
      const response = await axiosInstance.get(endpoint);
      const parsed = parseResponse(InstructionsBaseSchema, response.data, endpoint);
      return parsed.data.attributes;
    }, endpoint);
  }

  static async getLanding(en: boolean): Promise<Landing> {
    const locale = en ? "?locale=en" : "";
    const endpoint = `/landing${locale}`;

    return fetchWithErrorHandling(async () => {
      const response = await axiosInstance.get(endpoint);
      const parsed = parseResponse(LandingBaseSchema, response.data, endpoint);
      return parsed.data.attributes;
    }, endpoint);
  }

  static async getArtists(en: boolean): Promise<Artist[]> {
    const locale = en ? "&locale=en" : "";
    const endpoint = `/galleries?populate=deep${locale}`;

    return fetchWithErrorHandling(async () => {
      const response = await axiosInstance.get(endpoint);
      const parsed = parseResponse(ArtistsResponseSchema, response.data, endpoint);
      return parsed.data;
    }, endpoint);
  }
}