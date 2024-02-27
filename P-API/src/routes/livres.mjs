import express from "express";
import { livres } from "../db/mockup-datas.mjs";
import { success } from "./helper.mjs";
const livresRouter = express();

livresRouter.get("/", (req, res) => {
  const message = "La liste des produits a bien été récupérée.";
  res.json(success(message, livres));
});
export { livresRouter };

livresRouter.get("/:id", (req, res) => {
  const livreId = req.params.id;
  const livre = livres.find((livre) => livre.id_livre == livreId);
  const message = `Le produit dont l'id vaut ${livreId} a bien été récupéré.`;
  res.json(success(message, livre));
});

livresRouter.post("/", (req, res) => {
  // Création d'un nouvel id du produit
  // Dans les prochains versions, c'est MySQL qui gérera cela pour nous (identifiant auto_increment)
  const id = getUniqueId(livres);
  // Création d'un objet avec les nouvelles informations du produits
  const createdLivre = { ...req.body, ...{ id: id, created: new Date() } };
  // Ajout du nouveau produit dans le tableau
  livres.push(createdLivre);
  // Définir un message pour le consommateur de l'API REST
  const message = `Le produit ${createdLivre.name} a bien été créé !`;
  // Retourner la réponse HTTP en json avec le msg et le produit créé
  res.json(success(message, createdProduct));
});
