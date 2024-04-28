/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["supabase.com"],
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
