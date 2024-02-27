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
      const message = `Le livre dont l'id vaut ${livreId} a bien été récupéré.`
      res.json(success(message, livre));
    })
    .catch((error) => {
      const message =
      "Le livre n'a pas pu être récupéré. merci de réessayer dans quelques instants.";
    res.status(500).json({ message, data: error });
  });
});

livresRouter.post("/", (req, res) => {
  // Création d'un nouvel id du livre
  // Dans les prochains versions, c'est MySQL qui gérera cela pour nous (identifiant auto_increment)
  const id = getUniqueId(livres);
  // Création d'un objet avec les nouvelles informations du livres
  const createdLivre = { ...req.body, ...{ id: id, created: new Date() } };
  // Ajout du nouveau livre dans le tableau
  livres.push(createdLivre);
  // Définir un message pour le consommateur de l'API REST
  const message = `Le livre ${createdLivre.name} a bien été créé !`;
  // Retourner la réponse HTTP en json avec le msg et le livre créé
  res.json(success(message, createdLivre));
});

livresRouter.delete("/:id", (req, res) => {
  const livreId = req.params.id;
  let deletedlivre = getLivre(livreId);
  removeLivre(livreId);
  // Définir un message pour le consommateur de l'API REST
  const message = `Le livre ${deletedLivre.name} a bien été supprimé !`;
  // Retourner la réponse HTTP en json avec le msg et le livre créé
  res.json(success(message, deletedLivre));
});


livresRouter.put("/:id", (req, res) => {
  const livreId = req.params.id;
  const livre = getlivre(livreId);
  // Mise à jour du livre
  // A noter que la propriété 'created' n'étant pas modifiée, sera conservée telle quelle.
  const updatedLivre = {
    id: livreId,
    ...req.body,
    created: livre.created,
  };
  updatelivre(livreId, updatedLivre);
  // Définir un message pour l'utilisateur de l'API REST
  const message = `Le livre ${updatedLivre.name} dont l'id vaut ${livreId} a été mis à jour avec succès !`;
  // Retourner la réponse HTTP en json avec le msg et le livre créé
  res.json(success(message, updatedLivre));
});
