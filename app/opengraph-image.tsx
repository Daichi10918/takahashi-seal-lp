import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Global Works | Foreign Talent Placement";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0B3D91 0%, #093273 60%, #072657 100%)",
          color: "white",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              background: "#F59E0B",
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
            GLOBAL WORKS
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 44, color: "#FBBF24", fontWeight: 600 }}>
            Foreign Talent Partner
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            Hire Smarter.
            <br />
            Onboard Faster.
          </span>
        </div>
        <span style={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
          Talent · Visa · Onboarding · Retention — One Stop.
        </span>
      </div>
    ),
    size,
  );
}
