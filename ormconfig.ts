module.exports = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  loging: true,
  synchronize: false,
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/migrations/**/*{.ts,.js}'],
  subscribers: ['dist/src/subscriber/**/*{.ts,.js}'],
};
