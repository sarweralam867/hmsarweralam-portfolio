import { ImageResponse } from "next/og";

type OgImageOptions = {
  eyebrow: string;
  title: string;
  description: string;
  accent?: string;
};

export const ogImageSize = { width: 1200, height: 630 };

export function createOgImage({ eyebrow, title, description, accent = "#087e6b" }: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "linear-gradient(135deg, #fbfcfa 0%, #edf5f0 100%)",
          color: "#102a2a",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "68px 78px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ position: "absolute", right: 65, top: 45, width: 280, height: 280, border: `2px solid ${accent}22`, borderRadius: 999 }} />
        <div style={{ position: "absolute", right: 120, top: 100, width: 170, height: 170, border: `2px solid ${accent}22`, borderRadius: 999 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: accent, fontSize: 22, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
          <div style={{ background: accent, height: 3, width: 42 }} />
          {eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: title.length > 55 ? 58 : 76, fontWeight: 500, letterSpacing: -2, lineHeight: 1.04 }}>
            {title}
          </div>
          <div style={{ color: "#506563", fontSize: 25, lineHeight: 1.45, marginTop: 28, maxWidth: 900 }}>
            {description}
          </div>
        </div>
        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", fontSize: 21, fontWeight: 700 }}>
          <div>H. M. Sarwer Alam</div>
          <div style={{ color: accent }}>Software Engineer · AI/ML Researcher</div>
        </div>
      </div>
    ),
    ogImageSize,
  );
}
