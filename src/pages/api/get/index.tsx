import prisma from "@/app/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const feed = await prisma.layouts.findMany({});
    // console.log("FEED: ", feed);
    return res.status(201).json({ data: feed });
  } catch (err) {
    console.log("error: ", err);
  }
}
