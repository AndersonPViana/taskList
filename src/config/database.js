require("dotenv").config;

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: process.env.CONNECTIONSTRING,
  database: "tasklist",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
