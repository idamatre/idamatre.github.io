import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // enables `next export` (static site)
  images: { unoptimized: true },
};

export default nextConfig;
