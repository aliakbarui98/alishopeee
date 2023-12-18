import asyncHandler from "../../helper/asyncHandler";
import routes from "../../routes/public";
import ProductService from "./service";
import { Request, Response } from "express";
import  uploadController  from "../../helper/ImageUploader";


routes.get(
  `/getAllProducts`,
  asyncHandler(async function getAllProducts(req: Request, res: Response) {
    const result = await ProductService.getAllProduct();
    if (result) {
      return res.status(200).json(result);
    }
  })
);

routes.post(
  '/uploadImage',
  uploadController.uploadImages,
  uploadController.resizeImages
)

