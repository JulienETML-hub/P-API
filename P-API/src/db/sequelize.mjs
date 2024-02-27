
 
import { livres } from "./mockup-datas.mjs";
import { /*UserModel,*/ livreModel } from "../models/livres.mjs";
//import bcrypt from "bcrypt";
const sequelize = new Sequelize(
  "db_livres", // Nom de la DB qui doit exister
  "root", // Nom de l'utilisateur
  "root", // Mot de passe de l'utilisateur
  {
    host: "localhost",
    port: 6033,
    dialect: "mysql",
    logging: false,
  }
);
const livre = livreModel(sequelize, DataTypes);
const User = UserModel(sequelize,DataTypes );
let initDb = () => {
  return sequelize
  .sync({ force: true }) // Force la synchro => donc supprime les données également
  .then((_) => {
  importLivres();
  //importUsers();
  console.log("La base de données db_livres a bien été synchronisée");
  });
  };
  

const importLivres = () => {
  // Import tous les produits présents dans le fichier db/mock-livre
  livres.map((livre) => {
    livre.create({
      name: livre.name,
      price: livre.price,
    }).then((livre) => console.log(livre.toJSON()));
  });
};
/*const importUsers = () => {
  bcrypt
  .hash("etml", 10) // temps pour hasher = du sel
  .then((hash) =>
  User.create({
  username: "etml",
  password: hash,
  })
  )
  .then((user) => console.log(user.toJSON()));
  };
  */
/*const findAll = () =>{
    console.log( "Ici "+ livres.findAll)
   // return sequelize.getDatabaseName()

}*/

export { sequelize, initDb, livre };
