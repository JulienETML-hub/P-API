// Importation des modules
import express from "express";
import { success, getUniqueId } from "./helper.mjs";
import { auth } from "../auth/auth.mjs";

// Importation des modèles
import { Commentaire } from "../models/index.js";

// Création du routeur
const commentairesRouter = express();

// route GET /commentaires avec l'authentification
commentairesRouter.get("/", auth, (req, res) => { // Récupérer la liste des commentaires
  Commentaire.findAll()
    .then((commentaires) => {
      const message = "La liste des commentaires a bien été récupérée.";
      res.json(success(message, commentaires));
    })
    .catch((error) => {
      const message =
        "La liste des commentaires n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route GET /commentaires/:id avec l'authentification
commentairesRouter.get("/:id", auth, (req, res) => { // Récupérer un commentaire par son id
  Commentaire.findByPk(req.params.id)
    .then((commentaire) => {
      if (commentaire === null) {
        const message =
          "Le commentaire demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      }
      const message = `Le commentaire dont l'id vaut ${req.params.id} a bien été récupéré.`;
      res.json(success(message, commentaire));
    })
    .catch((error) => {
      const message =
        "Le commentaire n'a pas pu être récupéré. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route POST /commentaires avec l'authentification
commentairesRouter.post("/", auth, (req, res) => { // Créer un commentaire
  Commentaire.create(req.body)
    .then((createdCommentaire) => {
      const message = `Le commentaire ${createdCommentaire.contenu} a bien été créé !`;
      res.json(success(message, createdCommentaire));
    })
    .catch((error) => {
      const message =
        "Le commentaire n'a pas pu être ajouté. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route DELETE /commentaires/:id avec l'authentification
commentairesRouter.delete("/:id", auth, (req, res) => { // Supprimer un commentaire
  Commentaire.findByPk(req.params.id)
    .then((commentaire) => {
      if (commentaire === null) {
        const message =
          "Le commentaire demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      }
      Commentaire.destroy({ where: { id: req.params.id } })
        .then(() => {
          const message = `Le commentaire ${commentaire.contenu} a bien été supprimé !`;
          res.json(success(message, commentaire));
        })
        .catch((error) => {
          const message =
            "Le commentaire n'a pas pu être supprimé. Merci de réessayer dans quelques instants.";
          res.status(500).json({ message, data: error });
        });
    })
    .catch((error) => {
      const message =
        "Le commentaire n'a pas pu être récupéré. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// Exportation du routeur
export { commentairesRouter };