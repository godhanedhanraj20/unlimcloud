import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['az743702.vo.msecnd.net'],
  },
  output: 'export',
  distDir: 'build',
};

export default nextConfig;
