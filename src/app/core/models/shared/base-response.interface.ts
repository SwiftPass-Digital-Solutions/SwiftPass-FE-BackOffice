export interface BaseResponse<T> {
  status: boolean;
  message: string;
  traceId: string;
  data: T;
}
