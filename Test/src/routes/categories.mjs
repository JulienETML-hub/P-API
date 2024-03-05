// Importation des modules
import express from "express";
import { success, getUniqueId } from "./helper.mjs";

// Importation des modèles
import { Categorie } from "../db/sequelize.mjs";

// Création du routeur
const categoriesRouter = express();

// route GET /categories
categoriesRouter.get("/", (req, res) => { // Récupérer la liste des catégories
  Categorie.findAll()
    .then((categories) => {
      const message = "La liste des catégories a bien été récupérée.";
      res.json(success(message, categories));
    })
    .catch((error) => {
      const message =
        "La liste des catégories n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route GET /categories/:id
categoriesRouter.get("/:id", (req, res) => { // Récupérer une catégorie par son id
  Categorie.findByPk(req.params.id)
    .then((categorie) => {
      if (categorie === null) {
        const message =
          "La catégorie demandée n'existe pas. Merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      }
      const message = `La catégorie dont l'id vaut ${req.params.id} a bien été récupérée.`;
      res.json(success(message, categorie));
    })
    .catch((error) => {
      const message =
        "La catégorie n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route POST /categories
categoriesRouter.post("/", (req, res) => { // Créer une catégorie
  Categorie.create(req.body)
    .then((createdCategorie) => {
      const message = `La catégorie ${createdCategorie.nom} a bien été créée !`;
      res.json(success(message, createdCategorie));
    })
    .catch((error) => {
      const message =
        "La catégorie n'a pas pu être ajoutée. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route DELETE /categories/:id
categoriesRouter.delete("/:id", (req, res) => { // Supprimer une catégorie
  Categorie.findByPk(req.params.id)
    .then((categorie) => {
      if (categorie === null) {
        const message =
          "La catégorie demandée n'existe pas. Merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      }
      categorie.destroy()
        .then(() => {
          const message = `La catégorie dont l'id vaut ${req.params.id} a bien été supprimée.`;
          res.json(success(message));
        })
        .catch((error) => {
          const message =
            "La catégorie n'a pas pu être supprimée. Merci de réessayer dans quelques instants.";
          res.status(500).json({ message, data: error });
        });
    })
    .catch((error) => {
      const message =
        "La catégorie n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// Exportation du routeur
export { categoriesRouter };