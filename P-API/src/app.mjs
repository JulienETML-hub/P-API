import express from "express";
import { initDb, Livre, sequelize } from "./db/sequelize.mjs";
const app = express();
app.use(express.json());
const port = 3000;

sequelize
.authenticate()
.then((_) =>
console.log("La connexion à la base de données a bien été établie")
)
.catch((error) => console.error("Impossible de se connecter à la DB"));
initDb();
app.get("/api/", (req, res) => {
res.redirect(`http://localhost:${port}/`);
});
import { livresRouter } from "./routes/livres.mjs";
app.use("/api/livres", livresRouter);
app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`);
});
