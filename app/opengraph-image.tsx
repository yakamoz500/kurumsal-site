import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Özhan Metal — metal kesme kalıpları ve pres baskı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  // Diskten okunuyor; fetch(file://) bu Next sürümünde desteklenmiyor.
  // Dosyanın sunucu paketine girmesi next.config.ts içindeki
  // outputFileTracingIncludes ile garanti altına alındı.
  const photo = readFileSync(join(process.cwd(), "public", "hero-pres.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  const tick = {
    position: "absolute" as const,
    width: 28,
    height: 28,
    borderColor: "#f59e0b",
    borderStyle: "solid" as const,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0c0a09",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }}
        />

        {/* Metnin okunması için soldan sağa açılan grafit perde */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            backgroundImage:
              "linear-gradient(90deg, rgba(12,10,9,0.94) 0%, rgba(12,10,9,0.86) 40%, rgba(12,10,9,0.20) 100%)",
          }}
        />

        {/* Gönye işaretleri — sitedeki CornerTicks ile aynı dil */}
        <div style={{ ...tick, top: 36, left: 36, borderWidth: "2px 0 0 2px" }} />
        <div style={{ ...tick, top: 36, right: 36, borderWidth: "2px 2px 0 0" }} />
        <div style={{ ...tick, bottom: 36, left: 36, borderWidth: "0 0 2px 2px" }} />
        <div style={{ ...tick, bottom: 36, right: 36, borderWidth: "0 2px 2px 0" }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            paddingLeft: 86,
            paddingRight: 86,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 34, height: 2, backgroundColor: "#f59e0b" }} />
            <div
              style={{
                marginLeft: 16,
                color: "#f59e0b",
                fontSize: 20,
                letterSpacing: "0.22em",
              }}
            >
              DÜŞÜK TOLERANS · YÜKSEK HASSASİYET
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 94,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            <span style={{ color: "#ffffff" }}>ÖZHAN&nbsp;</span>
            <span style={{ color: "#f59e0b" }}>METAL</span>
          </div>

          <div style={{ display: "flex", marginTop: 24, color: "#d6d3d1", fontSize: 29 }}>
            Metal kesme kalıpları · Progresif kalıp · Pres baskı
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 44,
              paddingTop: 22,
              borderTop: "1px solid rgba(255,255,255,0.18)",
              width: 560,
            }}
          >
            <div style={{ color: "#a8a29e", fontSize: 20, letterSpacing: "0.12em" }}>ozhanmetal.com</div>
            <div style={{ color: "#57534e", fontSize: 20, paddingLeft: 16, paddingRight: 16 }}>·</div>
            <div style={{ color: "#a8a29e", fontSize: 20, letterSpacing: "0.12em" }}>1991&apos;den bu yana</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
