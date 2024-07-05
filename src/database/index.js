const pgp = require("pg-promise")()
const { join } = require("node:path")

const db = pgp("postgres://postgres:root@db:5432/polls");

const filePath = join(__dirname, "create-tables.sql")
const query = new pgp.QueryFile(filePath)
db.query(query)

module.exports = db