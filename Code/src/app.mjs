import express from "express";
import { initDb, Livre, sequelize } from "./db/sequelize.mjs";
import { livresRouter } from "./routes/livres.mjs";


const app = express();
app.use(express.json());
const port = 3000;

// Test de connexion à la base de données
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

app.use("/api/livres", livresRouter);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});


// Si aucune route ne correspondant à l'URL demandée par le consommateur
app.use(({ res }) => {
    const message =
        "Impossible de trouver la ressource demandée! Vous pouvez essayez un autre URL.";
    res.status(404).json(message);
});