import { Request, Response } from "express";
import {
  createUser,
  findAndUpdate,
  findUser,
  deleteUser,
} from "../services/users.service";

export const createResource = async (req: Request, resp: Response) => {
  const user = await createUser(req.body);
  resp.json({
    status: 200,
    message: "Data inserted successfully",
    data: user,
  });
};

export const updateResource = async (req: Request, resp: Response) => {
  const user = await findAndUpdate(
    { name: req.body.name },
    { dept: req.body.dept },
    { new: true }
  );
  resp.json({
    status: 200,
    message: "Data updated successfully",
    data: user,
  });
};

export const fetchResource = async (req: Request, resp: Response) => {
  const user = await findUser({ name: req.params.id });
  resp.json({
    status:user?.length?200:404,
    data: user,
  });
};

export const deleteResource = async (req: Request, resp: Response) => {
  const user = await deleteUser({ name: req.params.id });
  resp.json({
    status:204,
    message: "User deleted successfully",
    data: user,
  });
};
