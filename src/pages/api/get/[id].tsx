import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/lib/prisma";

// api/get/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const layoutId = Number(req.query.id);
  console.log("PING: ", layoutId);
  try {
    const climbs = await prisma.climbs.findMany({
      where: { layout_id: layoutId },
      select: {
        name: true,
      },
    });

    return res.status(201).json({ data: climbs });
  } catch (e) {
    console.log("error: ", e);
  }
}
