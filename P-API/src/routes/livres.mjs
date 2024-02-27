import express from "express";
import { livres } from "../db/mockup-datas.mjs";
import { success } from "./helper.mjs";
const livresRouter = express();

livresRouter.get("/", (req, res) => {
const message = "La liste des produits a bien été récupérée.";
res.json(success(message, livres));
});
export { livresRouter };


livresRouter.get("/:id_livre", (req, res) => {
    const livreId = req.params.id;
    const livre = livres.find((livre) => livre.id == livreId);
    const message = `Le produit dont l'id vaut ${livreId} a bien été récupéré.`;
    res.json(success(message, livre));
});
