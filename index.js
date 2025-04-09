import pg from "pg";
const client = new pg.Client({
  user: "postgres",
  password: "1235",
  host: "localhost",
  port: 5432,
  database: "najot",
});

client
  .connect()
  .then(async () => {
    console.log("Ulandi");
    const result = await client.query("SELECT NOW()");
    console.log(result.rows[0]);
  })
  .catch((err) => {
    console.log("errorr", err);
  });
