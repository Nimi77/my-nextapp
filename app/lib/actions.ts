"use server";
import { sql } from "@vercel/postgres";
import { z } from "zod";

export type User = {
  id: string;
  email: string;
  password: string;
};

export const RegisterSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8).max(100).trim(),
})


export async function createUser(user: Omit<User, 'id'>) {
  console.log(user);

  const saveUser = await sql`
      INSERT INTO users (email, password, name)
      VALUES (${user.name}, ${user.email}, ${user.password} )
    `;

  console.log("saveUser", saveUser);
  return saveUser;
}

export async function getUser(email: string) {
  console.log("getUser", email);
  
  try {
    const result = await sql`SELECT * FROM users WHERE email = ${email}`;
    console.log("result", result);

    return result?.rows[0] as User;
  } catch (error) {
    console.log("Internal server error", error);
    throw new Error("Failed to fetch user.");
  }
}
