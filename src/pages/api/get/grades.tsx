import prisma from "@/app/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const grades = await prisma.difficulty_grades.findMany({
      select: { difficulty: true, boulder_name: true },
    });
    return res.status(201).json({ data: grades });
  } catch (err) {
    console.log("error: ", err);
  }
}
