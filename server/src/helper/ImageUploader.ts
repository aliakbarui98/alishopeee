import AppResponse from "../modules/Response/AppResponse";
import BuildAppResponse from "../modules/Response/AppResponse";
import ResponseError from "../modules/Response/ResponseError";
import multer from "multer";

const multerStorage = multer.memoryStorage();
const multerFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startWith("image")) {
    cb(null, true);
  } else {
    cb("Please Upload only images", false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  dest: "../../public/products",
});

const uploadFiles = upload.single("products"); //upload multi img
const uploadImages = (req: any, res: any, next: any) => {
  uploadFiles(req, res, (err: any) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurrd when uploading
      if (err.code === "LIMIT_FIELD_VALUE") {
        //Too many images exceeding the allowed limit
        throw new ResponseError.BadRequest("please send just 2mb pic!");
      }
    } else if (err) {
      throw new ResponseError.BadRequest(err);
    }
    // Everything is ok
    next();
  });
};

const resizeImages = async (req: any, res: any) => {
  if (!req.file) {
    const badResult = BuildAppResponse.appResponse({
      code: 401,
      isSuccessfull: false,
      message: "Profile Pic did not send correctly!",
    });
    return res.status(badResult.code).send(badResult);
  }
};

const getResult = async (req: any, res: any) => {
  if (req.body.images && req.body.images.length === 0) {
    return BuildAppResponse.appResponse({
      isSuccessfull: false,
      message: "You must select at least 1 image.",
    } as AppResponse);
  }

  return BuildAppResponse.appResponse({
    isSuccessfull: true,
    message: "Profile picture updated",
  } as AppResponse);
};

export default {
  uploadImages: uploadImages,
  resizeImages: resizeImages,
  getResult: getResult,
};
