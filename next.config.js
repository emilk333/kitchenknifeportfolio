/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains : [
            "cdn.shopify.com",
            "images.pexels.com",
            "tetogi.dk", // Remove and replace with own image 
            "www.toshoknifearts.com" // Remove and replace with own image 
        ]
    }
}

module.exports = nextConfig
