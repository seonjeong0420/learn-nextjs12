// 방법 1.
// const API_KEY = "10923b261ba94d897ac6b81148314a3f";

// module.exports = {
//   reactStrictMode: true,
//   async redirects() {
//     return [
//       {
//         source: "/contact/:path*",
//         destination: "/form/:path*",
//         permanent: false,
//       },
//     ];
//   },
//   async rewrites() {
//     return [
//       {
//         source: "/api/movies",
//         destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
//       },
//     ];
//   },
// };

// 방법 2.
const API_KEY = process.env.API_KEY; // .env 파일에 API_KEY 정보 제공

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact/:path*",
        destination: "/form/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
