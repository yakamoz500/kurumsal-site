import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Özhan Metal | Metal Kesme Kalıpları";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid deseni */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Turuncu glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid rgba(249,115,22,0.5)",
            color: "#f97316",
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "8px 20px",
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          Metal Kesme Kalıpları
        </div>

        {/* Ana başlık */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          <span style={{ color: "#ffffff" }}>OZHAN&nbsp;</span>
          <span style={{ color: "#f97316" }}>METAL</span>
        </div>

        {/* Alt yazı */}
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 24,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Düşük Tolerans • Yüksek Hassasiyet
        </div>

        {/* Alt çizgi dekorasyon */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#52525b",
            fontSize: 16,
            letterSpacing: "0.15em",
          }}
        >
          ozhanmetal.com
        </div>
      </div>
    ),
    { ...size }
  );
}
