import BadRequest from "../Errors/BadRequest";
import BaseResponse from "../Errors/BaseResponse";
import Forbidden from "../Errors/Forbidden";
import InternalServer from "../Errors/InternalServer";
import NotFound from "../Errors/NotFound";
import Unauthorized from "../Errors/Unauthorized";

const ResponseError = {
  BaseResponse,
  BadRequest,
  NotFound,
  Forbidden,
  Unauthorized,
  InternalServer,
};

export default ResponseError;
