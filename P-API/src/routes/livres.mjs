import express from "express";
import { livres } from "../db/mockup-datas.mjs";
import { success, getUniqueId } from "./helper.mjs";
import { livre } from "../db/sequelize.mjs";
const livresRouter = express();

livresRouter.get("/", (req, res) => {
  livre.findAll()
    .then((livres) => {
      const message = "La liste des livres a bien été récupérée.";
      res.json(success(message, livres));
    })
    .catch ((error) => {
      const message =
        "La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});
export { livresRouter };

livresRouter.get("/:id", (req, res) => {
  livre.findByPk(req.params.id)
    .then((livre) => {
      if (livre === null) {
        const message =
          "Le livre demandé n'existe pas. merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      }
      const message = `Le livre dont l'id vaut ${livre.Id} a bien été récupéré.`
      res.json(success(message, livre));
    })
    .catch((error) => {
      const message =
      "Le livre n'a pas pu être récupéré. merci de réessayer dans quelques instants.";
    res.status(500).json({ message, data: error });
  });
});

livresRouter.post("/", (req, res) => {
  livre.created(req.body)
    .then((createdLivre) => {
      const message = 
      `Le livre ${createdLivre.name} a bien été crée!`
      res.json(success(message, createdLivre));
    })
    .catch((error) => {
      const message = "Le produit n'a pas pu être ajouté. Merci de réessayer dans quelque instants.";
    res.status(500).json({ message, data: error });
  });
});

livresRouter.delete("/:id", (req, res) => {
  const livreId = req.params.id;
  let deletedlivre = getLivre(livreId);
  removeLivre(livreId);
  // Définir un message pour le consommateur de l'API REST
  const message = `Le livre ${deletedlivre.name} a bien été supprimé !`;
  // Retourner la réponse HTTP en json avec le msg et le livre créé
  res.json(success(message, deletedlivre));
});


livresRouter.put("/:id", (req, res) => {
  const livreId = req.params.id;
  Livre.update(req.body, { were: { id: livreId }})
    .then((_) => {
      Livre.findByPk(livreId)
        .then((updatedLivre) => {
          if (updatedLivre === null) {
            const message = "Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
            return res.status(404).json({ message });
          }
          const message = `Le livre ${updatedLivre.name} dont l'id vaut ${updatedLivre.id} a été mis à jour avec succé`
          res.json(success(message, updatedLivre));
        })
        .catch((error) => {
          const message = "Le produit n'a pas pu etre mis à jour. Merci de réessayer dans quelques instants"
          res.status(500).json({ messafe, data: error });
        });
    })
    .catch((error) => {
      const message = "Le produit n'a pas pu être mis à jour. merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});