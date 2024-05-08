const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

try {
  module.exports = withNextIntl(nextConfig);
} catch (error) {
  console.error("An error occurred:", error);
}
