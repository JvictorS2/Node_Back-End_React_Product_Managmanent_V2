import { Router } from "express";
import express from "express";
import {
  deleteProduct,
  getAllProducts,
  getProduct,
  postProduct,
  putProduct,
} from "../controllers/products";
const routerProduct = Router();

// Rotas da tabela products

routerProduct.get("/api/product", getAllProducts);

routerProduct.get("/api/product/:id", getProduct);

routerProduct.post("/api/product/create", postProduct);

routerProduct.put("/api/product/update/:id", putProduct);

routerProduct.delete("/api/product/delete/:id", deleteProduct);

export { routerProduct };
