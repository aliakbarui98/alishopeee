import getterObject from "./getterObject";
import { Request, Express } from "express";

class withState {
  private req: Request;
  constructor(req: Request) {
    this.req = req;
    this.req.app.locals = this.setState.bind(this)
    // this.req.setFieldState = this.setFieldState.bind(this)
    // this.req.getState = this.getState.bind(this)
    // this.req.getHeaders = this.getHeaders.bind(this)
    // this.req.getQuery = this.getQuery.bind(this)
    // this.req.getQueryPolluted = this.getQueryPolluted.bind(this)
    // this.req.getParams = this.getParams.bind(this)
    this.req.cookies = this.getCookies.bind(this);
    // this.req.getBody = this.getBody.bind(this)
    // this.req.setBody = this.setBody.bind(this)
    // this.req.getTransaction = this.getTransaction.bind(this)
    // this.req.rollbackTransactions = this.rollbackTransactions.bind(this)
    // this.req.getSingleArrayFile = this.getSingleArrayFile.bind(this)
    // this.req.pickSingleFieldMulter = this.pickSingleFieldMulter.bind(this)
    // this.req.getMultiArrayFile = this.getMultiArrayFile.bind(this)
    // this.req.pickMultiFieldMulter = this.pickMultiFieldMulter.bind(this)
    // this.req._transaction = {}
  }
  getBody(path?: any, defaultValue?: any): any {
    return getterObject(this.req.body, path, defaultValue);
  }
  
  getCookies(path?: any, defaultValue?: any): any {
    return getterObject(this.req.cookies, path, defaultValue);
  }
  
  setState(val: object) {
    this.req.app.locals = {
      ...(this.req.app.locals || {}),
      ...val,
    }
  }
}
export default withState;
