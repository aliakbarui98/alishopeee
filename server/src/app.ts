import { Request, Response, NextFunction } from "express";
import express from "express";
import createError from "http-errors";
import indexRouter from "./routes/index";

const app = express();


app.use(
  express.json({
    limit: "200mb",
    type: "application/json",
  })
);

// Initial Route
app.use(indexRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

const port = process.env.PORT || 3000;
app.set("port", port);
app.listen(port);

module.exports = app;
