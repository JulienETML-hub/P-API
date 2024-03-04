const livreModel = (sequelize, DataTypes) => {
    return sequelize.define(
      "Livre",
      {
        id_livre: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
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
        anneededition: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
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
  