import { IAppResponse } from "../../interfaces/response";

class BuildAppResponse {
  public static appResponse(data: any) {
    return {
      code: data.code ? data.code : 200,
      message: data.message ? data.message : "",
      status: data.status ? data.status : 0,
      showToUser: data.showToUser ? data.showToUser : false,
      messageCode: data.messageCode ? data.messageCode : "",
      messageKind: data.messageKind ? data.messageKind : null,
      isSuccessfull: data.isSuccessfull ? data.isSuccessfull : false,
      data: data.data ? data.data : null,
    } as IAppResponse;
  }
}
export default BuildAppResponse
