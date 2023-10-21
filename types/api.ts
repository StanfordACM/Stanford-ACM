// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ResponseDataBase = Record<string, any> | undefined;

export interface ResponseData<T extends ResponseDataBase = undefined> {
  success: boolean;
  data?: T;
  error?: string;
}
