import { db } from "../db/index";
import { Product } from "../models/products";

// Controllers da tabela products

const getAllProductsService = () => {
  const querry: string = "SELECT * FROM products";

  return new Promise<Product[]>((resolve, reject) => {
    db.query(querry, (err: Error | null, data: Product[]) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

const getProductService = (id: string | undefined) => {
  const querry: string = `SELECT * FROM products WHERE idproducts = ?`;

  return new Promise<Product[]>((resolve, reject) => {
    db.query(querry, id, (err: Error | null, data: Product[]) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

const postProductService = (dataInput: Product) => {
  const querry: string = `INSERT INTO products SET ? `;

  return new Promise<Product>((resolve, reject) => {
    db.query(querry, dataInput, (err: Error | null, data: Product) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

const putProductService = (id: string | undefined, data: Product) => {
  const querry: string = `UPDATE products SET ? WHERE idproducts = ?`;

  return new Promise<Product | null>((resolve, reject) => {
    db.query(querry, [data, id], (err: Error | null, data: Product) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

const deleteProductService = (id: string | undefined) => {
  const querry: string = `DELETE FROM products WHERE idproducts = ? `;

  return new Promise<Product[] | null>((resolve, reject) => {
    db.query(querry, id, (err: Error | null, data: Product[]) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

export {
  getAllProductsService,
  getProductService,
  postProductService,
  deleteProductService,
  putProductService,
};
