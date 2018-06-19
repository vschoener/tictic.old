// Sequelize-cli usage
export = {
  development: {
    url: process.env.DATABASE_URL || "postgres://user:pass@postgres:5432/tictic",
    dialect: 'postgres'
  },
  test: {
    url: process.env.DATABASE_URL || "postgres://user:pass@postgres:5432/tictic_test",
    dialect: 'postgres'
  },
  production: {
    url:  process.env.DATABASE_URL || "postgres://user:pass@postgres:5432/tictic_prod",
    dialect: 'postgres'
  }
}
