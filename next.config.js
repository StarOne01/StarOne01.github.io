/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'dist',
    // Pin the workspace root to this repo so Turbopack doesn't pick up
    // stray lockfiles from the home directory.
    turbopack: {
        root: __dirname,
    },
    // Allow HMR when the dev server is opened from this origin.
    allowedDevOrigins: ['127.0.0.1'],
};
module.exports = nextConfig;
