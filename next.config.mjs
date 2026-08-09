/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local images only for now — add remotePatterns here if you later
    // pull project thumbnails from a CMS or Figma's CDN.
    unoptimized: false,
    // Placeholder thumbnails ship as SVG; once real photographic exports
    // (JPG/PNG/WebP) from Figma replace them, this can be removed.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
