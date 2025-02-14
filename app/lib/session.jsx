"use server";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Load Secret Key for JWT
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

// Encrypt user session (JWT Token)
export const encrypt = async (payload) => {
    console.log(`Encrypting payload: ${JSON.stringify(payload)}`);
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey);
};

// Decrypt session token
export const decrypt = async (session) => {
    try {
        console.log(`Decrypting session: ${session}`);
        const { payload } = await jwtVerify(session, encodedKey, { algorithms: ["HS256"] });
        console.log(`Decrypted payload: ${JSON.stringify(payload)}`);
        return payload;
    } catch {
        console.log("Failed to verify session");
        return null;
    }
};

// Create a new session (Set JWT Cookie)
export const createSession = async (userId) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encrypt({ userId, expiresAt });

    const cookieStore = await cookies();
    cookieStore.set("session", session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
    });

    console.log("Session stored in cookies:", session);
};

// Verify session (Check if user is logged in)
export async function verifySession() {
    const session = (await cookies()).get("session")?.value;
    if (!session) return { isAuth: false, userId: null };

    const payload = await decrypt(session);
    if (!payload || new Date(payload.expiresAt) < new Date()) {
        await deleteSession();
        return { isAuth: false, userId: null };
    }

    return { isAuth: true, userId: payload.userId };
}

// Update Session Expiry (Extends session)
export async function updateSession() {
    const session = (await cookies()).get("session")?.value;
    if (!session) return null;

    const payload = await decrypt(session);
    if (!payload) return null;

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const newSession = await encrypt({ userId: payload.userId, expiresAt });

    (await cookies()).set("session", newSession, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
    });

    return { isAuth: true, userId: payload.userId };
}

//  Delete Session (Logout)
export async function deleteSession() {
    (await cookies()).delete("session");
}
