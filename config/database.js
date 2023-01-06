module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cepfib14rebfj932q5bg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_afrs'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'fekVpH61Qx85qA63DnlKydrnn0o5IIRm'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
