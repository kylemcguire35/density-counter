import prisma from "@/app/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

// POST /api/post
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await prisma.session.create({
      data: data,
    });
    return res.status(201).json(result);
  } catch (err) {
    console.log("error: ", err);
  }
}
