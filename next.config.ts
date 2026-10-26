import type { NextConfig } from "next";
import { baseCommerceRewrites } from "./lib/base-commerce-rewrites";

const nextConfig: NextConfig = {
  async rewrites() {
    return baseCommerceRewrites();
  },
};

export default nextConfig;
