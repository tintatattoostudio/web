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
