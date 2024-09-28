import { NextRequest, NextResponse } from "next/server";
import { autorizar } from "./app/api/auth/autorizar";

const middleware = async (req: NextRequest): Promise<NextResponse> => {
  try {
    return await autorizar(req);
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/users/sign-in"));
  }
};

export const config = { matcher: "/users/dashboard/:path" };

export default middleware;
