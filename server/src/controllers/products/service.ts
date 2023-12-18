import { getAllProducts } from "../../bin/db";

class ProductService {
  public static async getAllProduct() {
    const getDataFromdb = await getAllProducts();
    if (getDataFromdb) {
      return getDataFromdb;
    }
    return null;
  }
}

export default ProductService;
