import express, { Request, Response, NextFunction } from "express";
import ResponseError from "../modules/Response/ResponseError";
import publicRoute from './public'

const router = express.Router();

/** Rules of our API */
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }

  next();
});

/* Home Page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  return res.send(`<h1>Welcome To MindUp Server</h1><br/><br/>
    <h3>"Find Api docs Here :</h3><Br/>
    <h3><a>https://api.mindup-server.com/v1/api-docs</a></h3>`);
});

/* Forbidden Page. */
router.get("v1", function (req: Request, res: Response, next: NextFunction) {
  throw new ResponseError.Forbidden("forbidden,wrong access endpoint");
});

/* Declare Route */
router.use("/v1", publicRoute);

export default router;
