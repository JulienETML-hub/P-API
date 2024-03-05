// Importation des modules
import { Sequelize, DataTypes } from "sequelize";

//importation des mockup
import { utilisateurs } from "./mockup-utilisateurs.mjs";
import { livres } from "./mockup-livres.mjs";

//importation des models
import { livreModel } from "../models/livres.mjs";
import { utilisateursModel } from "../models/utilisateurs.mjs";


const sequelize = new Sequelize(
  "db_livres", // Nom de la DB qui doit exister
  "root", // Nom de l'utilisateur
  "root", // Mot de passe de l'utilisateur
  {
    host: "localhost",
    port: "6033",// pour les conteneurs docker MySQL
    dialect: "mysql",
    logging: false,
  }
);

// Creation des tables a partir des modeles
const Livre = livreModel(sequelize, DataTypes);
const Utilisateur = utilisateursModel(sequelize, DataTypes);

// Fonction pour initialiser la base de données
let initDb = () => {
  return sequelize
    .sync({ force: true }) // Force la synchro => donc supprime les données également
    .then(() => {
      importLivres();
      importUtilisateurs();
      console.log("La base de données dblivres a bien été synchronisée");
    });
};

// Fonction pour importer les livres
const importLivres = () => {
  // Importe tous les livres présents dans un fichier ou une source de données
  livres.map((livre) => {
    Livre.create({
      nom: livre.nom,
      categorie: livre.categorie,
      extrait: livre.extrait,
      resume: livre.resume,
      auteur: livre.auteur,
      editeur: livre.editeur,
      anneeEdition: livre.anneeEdition,
      imageCouverture: livre.imageCouverture,
    }).then((livre) => console.log(livre.toJSON())).catch((error) => {
      console.error("Erreur lors de la création du livre :", error);
    });;
  });
};

// Fonction pour importer les utilisateurs
const importUtilisateurs = () => {
  // Importe tous les utilisateurs présents dans un fichier ou une source de données
  utilisateurs.map((utilisateur) => {
    utilisateur.create({
      pseudo: utilisateur.pseudo,
      motDePasse: utilisateur.motDePasse,
      dateEnregistrement: utilisateur.dateEnregistrement,
    }).then((utilisateur) => console.log(utilisateur.toJSON())).catch((error) => {
      console.error("Erreur lors de la création de l'utilisateur :", error);
    });
  });
};

export { sequelize, initDb, Livre };