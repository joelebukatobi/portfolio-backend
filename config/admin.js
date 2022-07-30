module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "d4aff7625c0eb848a1b87edb08809221"),
  },
  apiToken: { salt: env("API_TOKEN_SALT") },
});
