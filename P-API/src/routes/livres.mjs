import express from "express";
import { livres } from "../db/mockup-datas.mjs";
import { success, getUniqueId } from "./helper.mjs";
import { livre } from "../db/sequelize.mjs";
const livresRouter = express();

// route GET /livres
livresRouter.get("/", (req, res) => { // Récupérer la liste des livres
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

// route GET /livres/:id
livresRouter.get("/:id", (req, res) => { // Récupérer un livre par son id 
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

// route POST /livres
livresRouter.post("/", (req, res) => { // Créer un livre
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

// route DELETE /livres/:id
livresRouter.delete("/:id", (req, res) => { // Supprimer un livre
  const livreId = req.params.id;
  let deletedlivre = getLivre(livreId);
  removeLivre(livreId);
  // Définir un message pour le consommateur de l'API REST
  const message = `Le livre ${deletedlivre.name} a bien été supprimé !`;
  // Retourner la réponse HTTP en json avec le msg et le livre créé
  res.json(success(message, deletedlivre));
});

// route PUT /livres/:id
livresRouter.put("/:id", (req, res) => { // Mettre à jour un livre
  const livreId = req.params.id;
  livre.update(req.body, { were: { id: livreId }})
    .then((_) => {
      livre.findByPk(livreId) 
        .then((updatedLivre) => { // si le livre est trouvé
          if (updatedLivre === null) { // Si le livre n'existe pas
            const message = "Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
            return res.status(404).json({ message }); // Retourner une erreur 404
          }
          const message = `Le livre ${updatedLivre.name} dont l'id vaut ${updatedLivre.id} a été mis à jour avec succées.`;
          res.json(success(message, updatedLivre));
        })
        .catch((error) => {
          const message = "Le produit n'a pas pu etre mis à jour. Merci de réessayer dans quelques instants"
          res.status(500).json({ message, data: error });
        });
    })
    .catch((error) => { // Si la mise à jour échoue
      const message = "Le produit n'a pas pu être mis à jour. merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error }); // Retourner une erreur 500
    });
});