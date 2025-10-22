import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        minimumCacheTTL: 31556926,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'qnkqzalychzpbdpahpuv.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/teamlino/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
