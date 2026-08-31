import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/marketing/landingpage",
        permanent: true, // atau false jika halaman utama bersifat dinamis
      },
    ];
  },
};

export default nextConfig;