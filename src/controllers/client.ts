import { Request, Response } from "express";

/**
 * GET /client
 * Mock the client websocket functionality
 */
export const index = (req: Request, res: Response) => {
  res.render("client", {
    title: "Client"
  });
};
