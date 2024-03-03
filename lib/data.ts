"use server";

import prisma from "@/lib/prismadb";

export async function isUserExist(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (user) {
      return true;
    }

    return false;
  } catch (err) {
    console.log(err);
    throw new Error("Failed operation.");
  }
}
