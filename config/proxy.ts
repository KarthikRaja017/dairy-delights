
export default {
  dev: {
    '/server/api/': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
