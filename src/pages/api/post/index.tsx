import prisma from "@/app/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

// POST /api/post
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  const data = {
    id: body.id,
    name: body.name,
    round: Number(body.round),
    time: Number(body.time),
    climb: body.climb,
  };
  try {
    const result = await prisma.session.create({
      data: data,
    });
    return res.status(201).json(result);
  } catch (err) {
    console.log("error: ", err);
  }
}
