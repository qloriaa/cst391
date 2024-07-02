import { Request, Response } from "express";

const AUTHORS = [
    {id: 1, name: 'Sarah Young'}, 
    {id: 2, name: 'John Bevere'},
    {id: 3, name: 'Dane Ortlund'}, 
    {id: 4, name: 'R. Kent Hughes'}
];

export const getAuthors = (req: Request, res: Response) => {
    res.send(AUTHORS);
};