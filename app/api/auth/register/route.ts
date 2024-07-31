import { NextResponse } from "next/server";
import { createUser, RegisterSchema } from "@/app/lib/actions";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
    try {
        const result = await request.json();
        const validatedFields = RegisterSchema.safeParse(result)

        if (!validatedFields.success) {
            return {
                message: 'Missing required field or invalid data',
                errors: validatedFields.error.flatten().fieldErrors
            }
        }
        const { name, email, password } = validatedFields.data

        // Hashing the password
        const hashedPassword = await hash(password, 10);
        const user = {
            name,
            email,
            password: hashedPassword,
        };
        console.log(user)
        // Inserting the new user into the database
        // await createUser(email, hashedPassword);
        return NextResponse.json({ message: "User registered successfully" });

    } catch (e: any) {
        console.error("Error inserting user:", e);

        if (e.message.includes("duplicate key value violates unique constraint")) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}