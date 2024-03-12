// Importation des modules
import express from "express";
import { success, getUniqueId } from "./helper.mjs";
import { auth } from "../auth/auth.mjs";

// Importation des modèles
import { Categorie } from "../db/sequelize.mjs";

// Création du routeur
const categoriesRouter = express();

// route GET /categories avec l'authentification
categoriesRouter.get("/", auth, (req, res) => { // Récupérer la liste des catégories
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

// route GET /categories/:id  avec l'authentification
categoriesRouter.get("/:id", auth, (req, res) => { // Récupérer une catégorie par son id
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

// route POST /categories avec l'authentification
categoriesRouter.post("/", auth, (req, res) => { // Créer une catégorie
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

// route DELETE /categories/:id avec l'authentification
categoriesRouter.delete("/:id", auth, (req, res) => { // Supprimer une catégorie
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

// route GET /categories/:id/livres avec l'authentification, route imbriquée
categoriesRouter.get("/:id/livres", auth, (req, res) => { // Récupérer les livres d'une catégorie
  Categorie.findByPk(req.params.id, { include: "livres" }) // On inclut les livres de la catégorie
    .then((categorie) => { // Si la catégorie n'existe pas
      if (categorie === null) { // On renvoie un message d'erreur
        const message =
          "La catégorie demandée n'existe pas. Merci de réessayer avec un autre identifiant.";
        return res.status(404).json({ message });
      } // Si la catégorie existe on renvoie les livres de la catégorie
      const message = `Les livres de la catégorie ${categorie.nom} ont bien été récupérés.`;
      res.json(success(message, categorie.livres));
    }
    )
    .catch((error) => { // Si une erreur survient on renvoie un message d'erreur
      const message =
        "Les livres de la catégorie n'ont pas pu être récupérés. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
}
);





// categoriesRouter.get("/:id/livres", auth, (req, res) => { // Récupérer les livres d'une catégorie
//   Categorie.findByPk(req.params.id, { include: "livres" }) // On inclut les livres de la catégorie
//     .then((categorie) => { // Si la catégorie n'existe pas
//       if (categorie === null) { // On renvoie un message d'erreur
//         const message =
//           "La catégorie demandée n'existe pas. Merci de réessayer avec un autre identifiant.";
//         return res.status(404).json({ message });
//       } // Si la catégorie existe on renvoie les livres de la catégorie
//       const message = `Les livres de la catégorie ${categorie.nom} ont bien été récupérés.`;
//       res.json(success(message, categorie.livres));
//     })
//     .catch((error) => { // Si une erreur survient on renvoie un message d'erreur
//       const message =
//         "Les livres de la catégorie n'ont pas pu être récupérés. Merci de réessayer dans quelques instants.";
//       res.status(500).json({ message, data: error });
//     });
// });


// categoriesRouter.get("/:id/livres", auth, (req, res) => { // Récupérer les livres d'une catégorie
//   Categorie.findByPk(req.params.id, { include: "livres" }) // On inclut les livres de la catégorie
//     .then((categorie) => { // Si la catégorie n'existe pas
//       if (categorie === null) { // On renvoie un message d'erreur
//         const message =
//           "La catégorie demandée n'existe pas. Merci de réessayer avec un autre identifiant.";
//         return res.status(404).json({ message });
//       } // Si la catégorie existe on renvoie les livres de la catégorie
//       const message = `Les livres de la catégorie ${categorie.nom} ont bien été récupérés.`;
//       res.json(success(message, categorie.livres));
//     })
//     .catch((error) => { // Si une erreur survient on renvoie un message d'erreur
//       const message =
//         "Les livres de la catégorie n'ont pas pu être récupérés. Merci de réessayer dans quelques instants.";
//       res.status(500).json({ message, data: error });
//     });
// });

// Exportation du routeur
export { categoriesRouter };