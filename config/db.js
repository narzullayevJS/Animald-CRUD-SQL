import pg from 'pg'
const { Client } = pg
 import env from "dotenv"
env.config()

const pool = new pg.Client({
    user: "postgres",
    password: "1235",
    host: "localhost",
    port: 5432,
    database: "homework"
});

await pool.connect()

export default pool;
