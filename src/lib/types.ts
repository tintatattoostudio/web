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
  bio: string;
  styles: Array<string>;
  picture: string;
}