import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

type SocialImageOptions = {
  eyebrow: string;
  title: string;
  description: string;
};

export function createSocialImage({
  eyebrow,
  title,
  description,
}: SocialImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px 62px",
          color: "#f8f6ef",
          background:
            "linear-gradient(145deg, #0d2926 0%, #173b35 56%, #20483f 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#ff9a7b",
            fontSize: "22px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "2px",
              background: "#ff9a7b",
            }}
          />
          {eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            maxWidth: "930px",
          }}
        >
          <div
            style={{
              fontSize: "74px",
              lineHeight: "1.02",
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "30px",
              lineHeight: "1.35",
              color: "#dce3da",
              maxWidth: "900px",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            letterSpacing: "0.08em",
            color: "#c8d0c9",
            textTransform: "uppercase",
          }}
        >
          <span>Big Rig Carriers</span>
          <span>Bolton, Ontario</span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
