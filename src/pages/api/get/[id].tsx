import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/lib/prisma";
import { Climb, Grades } from "@/app/_models/interface";

// api/get/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const layoutId = Number(req.query.id);
  console.log("PING: ", layoutId);
  try {
    const climbs: any[] =
      await prisma.$queryRaw`SELECT c.name, cs.display_difficulty FROM climbs c JOIN climb_stats cs ON c.uuid = cs.climb_uuid WHERE c.layout_id = ${layoutId}`;

    return res.status(201).json({ climbs });
  } catch (e) {
    console.log("error: ", e);
  }
}
