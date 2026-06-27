export type MailJob = {
  to: string;
  toAdmin: boolean;
  subject: string;
  template: string;
  variables: Record<string, string>;
};