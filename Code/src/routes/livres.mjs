import express from "express";
import { success, getUniqueId } from "./helper.mjs";
import { Livre } from "../db/sequelize.mjs";
import { auth } from "../auth/auth.mjs";
const livresRouter = express();

// route GET /livres avec authentification
livresRouter.get("/", auth, (req, res) => { // Récupérer tous les livres
  Livre.findAll()
    .then((livres) => {
      const message = "La liste des livres a bien été récupérée.";
      res.json(success(message, livres));
    })
    .catch((error) => {
      const message =
        "La liste des livres n'a pas pu être récupérée. merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route GET /livres/:id avec authentification
livresRouter.get("/:id", auth, (req, res) => { // Récupérer un livre par son id 
  Livre.findByPk(req.params.id)
    .then((livre) => {
      if (livre === null) {
        const message =
          "Le livre demandé n'existe pas. merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      }
      const message = `Le livre dont l'id vaut ${req.params.id} a bien été récupéré.`
      res.json(success(message, livre));
    })
    .catch((error) => {
      const message =
        "Le livre n'a pas pu être récupéré. merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route POST /livres avec authentification
livresRouter.post("/", auth, (req, res) => { // Créer un livre
  Livre.create(req.body)
    .then((createdLivre) => {
      const message = `Le livre ${createdLivre.name} a bien été créé !`;
      res.json(success(message, createdLivre));
    })
    .catch((error) => {
      const message =
        "Le livre n'a pas pu être ajouté. merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

// route DELETE /livres/:id avec authentification



livresRouter.delete("/:id", auth, (req, res) => { // Supprimer un livre
  Livre.findByPk(req.params.id)
    .then((livre) => {
      if (livre === null) {
        const message =
          "Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      }
      Livre.destroy({ where: { idlivre: req.params.id } })
        .then(() => {
          const message = `Le livre ${livre.titre} a bien été supprimé !`;
          res.json(success(message, livre));
        })
        .catch((error) => {
          const message =
            "Le livre n'a pas pu être supprimé. Merci de réessayer dans quelques instants.";
          res.status(500).json({ message, data: error });
        });
    });
});


// route PUT /livres/:id avec authentification
livresRouter.put("/:id", auth, (req, res) => { // Mettre à jour un livre
  Livre.findByPk(req.params.id)
    .then((livre) => {
      if (livre === null) {
        const message =
          "Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      }
      livre.update(req.body);
      const message = `Le livre ${livre.titre} a bien été mis à jour !`;
      res.json(success(message, livre));
    })
    .catch((error) => {
      const message =
        "Le livre n'a pas pu être mis à jour. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});

export { livresRouter };