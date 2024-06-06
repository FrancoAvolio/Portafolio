// next.config.js
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Custom-Header",
            value: "my-value", // Puedes agregar o filtrar headers específicos
          },
        ],
      },
    ];
  },
};
