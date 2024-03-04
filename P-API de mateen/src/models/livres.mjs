const livreModel = (sequelize, DataTypes) => {
    return sequelize.define(
      "Livre",
      {
        idLivre: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        titre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        extrait: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        resume: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        anneeEdition: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        imageCouverture:{
          type:DataTypes.STRING,
          allowNull:true,
        },
        editeur:{
          type:DataTypes.STRING,
          allowNull:true,
        }
      },
      {
        timestamps: true,
        createdAt: "created",
        updatedAt: false,
        tableName:"livres"
      }
    );
  };
  
export { livreModel };