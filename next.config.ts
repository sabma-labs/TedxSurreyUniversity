/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Let the build succeed even if there are ESLint warnings
    ignoreDuringBuilds: true,
  },
  // OPTIONAL: uncomment only if you also want to ignore TS build errors temporarily
  // typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
