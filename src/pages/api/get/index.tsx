import prisma from "@/app/lib/prisma";
import { GetStaticProps } from "next";

export default async function handler() {
  const feed = await prisma.layouts.findMany({});
  try {
    return {
      props: { feed },
    };
  } catch (err) {
    console.log("error: ", err);
  }
}
