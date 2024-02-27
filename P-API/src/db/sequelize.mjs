import { Sequelize, DataTypes} from "sequelize";
import { livreModel } from "../models/livres.mjs";
import { livres } from "./mockup-datas.mjs";
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

const Livre = livreModel(sequelize, DataTypes);
let initDb = () => {
return sequelize
.sync({ force: true }) // Force la synchro => donc supprime les données également
.then(() => {
importLivres();
console.log("La base de données dblivres a bien été synchronisée");
});
};
const importLivres = () => {
  // Importe tous les livres présents dans un fichier ou une source de données
  livres.map((livre) => {
    Livre.create({
      titre: livre.titre,
      categorie: livre.categorie,
      nombredepages: livre.nombredepages,
      extrait: livre.extrait,
      resume: livre.resume,
      auteurnom: livre.auteurnom,
      auteurprenom: livre.auteurprenom,
      editeur: livre.editeur,
      anneededition: livre.anneededition,
      moyennedappreciation: livre.moyennedappreciation,
      commentaires: livre.commentaires,
      imagedecouverture: livre.imagedecouverture,
    }).then((livre) => console.log(livre.toJSON())).catch((error) => {
        console.error("Erreur lors de la création du livre :", error);
      });;
  });
};



export { sequelize, initDb, Livre };
