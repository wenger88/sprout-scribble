import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    console.log(req.url);
    return NextResponse.redirect(new URL('/', req.url));
}

export const config = {
    matcher: '/about/:path*',
}
