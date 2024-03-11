export type IResponseRepository<T extends unknown = any> = {
  status: "success" | "fail";
  message: string;
  data?: T;
};
