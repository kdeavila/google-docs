"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getUsers() {
  const clerk = await clerkClient();
  const { sessionClaims } = await auth();
  const orgId = (sessionClaims as any)?.o?.id as string | undefined;

  if (!orgId) {
    return [];
  }

  const response = await clerk.users.getUserList({
    organizationId: [orgId],
  });

  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl,
  }));

  return users;
}
