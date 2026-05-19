import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    turbo: {
      root: path.resolve(__dirname),
    },
  },
};

export default nextConfig;
