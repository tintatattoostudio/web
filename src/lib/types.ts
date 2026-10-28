export type FAQSectionQA = {
  question: string;
  answer: string;
  note?: string;
  type: 'text' | 'html' | 'list';
};

export type FAQSection = {
  title: string;
  description?: string;
  qa: Array<FAQSectionQA>;
};

export type InstructionsSection = {
  title: string;
  items: Array<string>;
  note?: string;
}

export type CareSection = {
  title: string;
  content?: string;
  listDescription?: string;
  list?: Array<string>;
  note?: string;
}

export type Artist = {
  name: string;
  alias: string;
  since: number;
  specialties: Array<string>;
  instagram: string;
  picture: string;
  textSide: 'left' | 'right';
}
