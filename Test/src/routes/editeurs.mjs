// Importation des modules
import express from "express";
import { success, getUniqueId } from "./helper.mjs";

// Importation des modèles
import { Editeur } from "../db/sequelize.mjs";

// Création du routeur
const editeursRouter = express(); 

// route GET /editeurs
editeursRouter.get("/", (req, res) => { // Récupérer la liste des éditeurs
  Editeur.findAll()
    .then((editeurs) => {
      const message = "La liste des éditeurs a bien été récupérée.";
      res.json(success(message, editeurs));
    })
    .catch((error) => {
      const message =
        "La liste des éditeurs n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route GET /editeurs/:id
editeursRouter.get("/:id", (req, res) => { // Récupérer un éditeur par son id
  Editeur.findByPk(req.params.id)
    .then((editeur) => {
      if (editeur === null) {
        const message =
          "L'éditeur demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      }
      const message = `L'éditeur dont l'id vaut ${req.params.id} a bien été récupéré.`;
      res.json(success(message, editeur));
    })
    .catch((error) => {
      const message =
        "L'éditeur n'a pas pu être récupéré. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route POST /editeurs
editeursRouter.post("/", (req, res) => { // Créer un éditeur
  Editeur.create(req.body)
    .then((createdEditeur) => {
      const message = `L'éditeur ${createdEditeur.nom} a bien été créé !`;
      res.json(success(message, createdEditeur));
    })
    .catch((error) => {
      const message =
        "L'éditeur n'a pas pu être ajouté. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route DELETE /editeurs/:id
editeursRouter.delete("/:id", (req, res) => { // Supprimer un éditeur
  Editeur.findByPk(req.params.id)
    .then((editeur) => {
      if (editeur === null) {
        const message =
          "L'éditeur demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      }
      return editeur.destroy();
    })
    .then(() => {
      const message = `L'éditeur dont l'id vaut ${req.params.id} a bien été supprimé.`;
      res.json(success(message));
    })
    .catch((error) => {
      const message =
        "L'éditeur n'a pas pu être supprimé. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// Exportation du routeur
export { editeursRouter };