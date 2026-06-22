import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    const noIndexHeaders = [
      {
        key: "X-Robots-Tag",
        value: "noindex, noarchive",
      },
    ];

    return [
      { source: "/resume.pdf", headers: noIndexHeaders },
      { source: "/cv.pdf", headers: noIndexHeaders },
    ];
  },
};

export default nextConfig;
