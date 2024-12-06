import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: false,
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  } 
};

export default nextConfig;
