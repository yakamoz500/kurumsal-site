import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f97316",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "14px",
            fontWeight: "900",
            letterSpacing: "-0.5px",
            fontFamily: "sans-serif",
          }}
        >
          ÖM
        </span>
      </div>
    ),
    { ...size }
  );
}
