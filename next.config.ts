import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'oemzduzzsdzlouednwio.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/team_lino_website/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
