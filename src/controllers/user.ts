import { db } from "../db/index";
import express, { response } from "express";
import { User } from "../models/user";
import { getAllProductsService } from "../services/products";

// Controllers da tabela user

// TODO

const getUser = (_: express.Request | null, res: express.Response) => {
  const querry: string = "SELECT * FROM user";

  db.query(querry, (err: Error | null, data: User[]) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

const postUser = (_: express.Request | null, res: express.Response) => {
  const querry: string = "SELECT * FROM user";
};

const deleteUser = (_: express.Request | null, res: express.Response) => {
  const querry: string = "SELECT * FROM user";
};

const putUser = (_: express.Request | null, res: express.Response) => {
  const querry: string = "SELECT * FROM user";
};

export { getUser, deleteUser, postUser, putUser };
