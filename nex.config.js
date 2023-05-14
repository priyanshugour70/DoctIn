const { withGoogleFonts } = require('@next-google-fonts/webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  }
  
  module.exports = withGoogleFonts({
    nextConfig,
    googleFonts: {
      fonts: [
        // Add your desired fonts here
        'Inter',
      ],
    },
  });
  