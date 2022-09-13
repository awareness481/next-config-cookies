/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/1",
        headers: [
          {
            key: "Set-Cookie",
            value: "firstCookie=cookie1; Path=/",
          },
          {
            key: "Set-Cookie",
            value: "secondCookie=cookie2; Path=/",
          },
        ],
      },
      {
        source: "/2",
        headers: [
          {
            key: "Set-Cookie",
            value: "firstCookie=cookie1; Path=/",
          },
        ],
      },
      {
        source: "/2",
        headers: [
          {
            key: "Set-Cookie",
            value: "secondCookie=cookie2; Path=/",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
