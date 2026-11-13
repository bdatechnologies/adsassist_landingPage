import { ImageResponse } from "next/og"

export const alt = "AdsAssist: know which ad brought every customer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#061D50", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(120deg,#05C4F4,#075CF6 45%,#7400EF)" }} />
          AdsAssist
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Know which ad brought every customer.</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.72)" }}>Google Ads and Meta, connected to your leads and sales.</div>
        </div>
        <div style={{ height: 8, width: 220, borderRadius: 8, background: "linear-gradient(90deg,#05C4F4,#075CF6,#7400EF)" }} />
      </div>
    ),
    size,
  )
}
