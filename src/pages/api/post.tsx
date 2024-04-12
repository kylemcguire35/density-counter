import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/lib/prisma";

export default async function handlePost(data: any) {
  try {
    const user = await prisma.session.create({
      data: {
        id: data.id,
        name: data.name,
        round: data.rounds,
        time: data.time,
        climb: data.climbs,
      },
    });
    console.log(user);
    // res.status(200).json({ users: user });
  } catch (err) {
    console.log("error: ", err);
  }
}
