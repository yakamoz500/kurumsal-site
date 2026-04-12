import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Sadece kök sayfada çalış
  if (pathname !== "/") return NextResponse.next();

  // Kullanıcı manuel dil seçtiyse dokunma
  const langCookie = request.cookies.get("lang")?.value;
  if (langCookie) return NextResponse.next();

  // Accept-Language header'ına bak
  const acceptLang = request.headers.get("accept-language") ?? "";
  const preferred = acceptLang.split(",")[0].trim().toLowerCase();

  // TR değilse /en'e yönlendir
  const isTurkish = preferred.startsWith("tr");
  if (!isTurkish) {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
