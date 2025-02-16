/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        ignoreBuildErrors: true,
    },
    webpack: (config, { isServer }) => {
        // Suppress the punycode warning
        config.ignoreWarnings = [
            { module: /node_modules\/node-fetch\/lib\/index\.js/ },
            { module: /node_modules\/punycode\/punycode\.js/ },
        ];
        return config;
    },
};

module.exports = nextConfig; 