export interface IAppResponse {
  code: number;
  message: string;
  status: number;
  showToUser: boolean;
  messageCode: string;
  messageKind: number; // 1-success  2-warning  3-error
  isSuccessfull: boolean;
  data: any;
}
