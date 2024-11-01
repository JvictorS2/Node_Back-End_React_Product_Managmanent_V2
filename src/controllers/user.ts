import {db} from '../db/index';
import express from 'express'
import { User } from '../models/user';

// Controllers da tabela user

const getUsers = (_: express.Request | null, res: express.Response) => {
    const q = "SELECT * FROM user";

    db.query(q, (err: Error | null, data: User[]) => {
        if (err) return res.status(500).json(err);
        
        return res.status(200).json(data);
    });
};

export {getUsers}