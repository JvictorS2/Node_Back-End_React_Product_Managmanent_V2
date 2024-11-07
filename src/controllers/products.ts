import express from "express";

import {
  deleteProductService,
  getAllProductsService,
  getProductService,
  postProductService,
  putProductService,
} from "../services/products";
import { Product } from "../models/products";

// Controllers da tabela user

// Buscar todos produtos
const getAllProducts = async (
  _: express.Request | null,
  res: express.Response
) => {
  try {
    await getAllProductsService()
      .then((products) => res.status(200).json(products))
      .catch((error) => res.status(400).json(error));
  } catch (err) {
    console.error("{ Controllers | product.ts | getAllProducts(id) } - " + err);
  }
};

// Buscar produto por id
const getProduct = async (
  req: express.Request | null,
  res: express.Response
) => {
  const id: string | undefined = req?.params.id;

  try {
    await getProductService(id)
      .then((products) => res.status(200).json(products))
      .catch((error) => res.status(400).json(error));
  } catch (err) {
    console.error("{ Controllers | product.ts | getProducts(id) } - " + err);
  }
};

// Criar produto
const postProduct = async (req: any, res: express.Response) => {
  const data: any = req.body;

  try {
    await postProductService(data)
      .then((products) => {
        res.status(200).send({
          message: "Product successful created!",
          data: data,
          tableInfo: products,
        });
      })
      .catch((err) => res.status(400).json(err));
  } catch (err) {
    console.error(
      "{ Controllers | product.ts | postProductService(data) } - " + err
    );
  }
};

// deleta um produto
const deleteProduct = async (
  req: express.Request | null,
  res: express.Response
) => {
  const id: string | undefined = req?.params.id;

  try {
    await deleteProductService(id)
      .then((products) => {
        res.status(200).send({
          message: "Product successful deleted!",
          idDeleted: id,
          dataDeleted: products,
        });
      })
      .catch((error) => res.status(400).json(error));
  } catch (err) {
    console.error("{ Controllers | product.ts | deleteProduct(id) } - " + err);
  }
};

// atualiza um produto
const putProduct = async (
  req: express.Request | null,
  res: express.Response
) => {
  const id: string | undefined = req?.params.id;
  const data: Product = req?.body;

  try {
    await putProductService(id, data)
      .then((products) => {
        res.status(200).send({
          message: "Product successful updated!",
          idProduct: id,
          dataUpdated: data,
          tableInfo: products,
        });
      })
      .catch((error) => res.status(400).json(error));
  } catch (err) {
    console.error("{ Controllers | product.ts | putProduct(id) } - " + err);
  }
};

export { getAllProducts, postProduct, getProduct, deleteProduct, putProduct };
