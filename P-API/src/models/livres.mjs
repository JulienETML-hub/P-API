const livreModel = (sequelize, DataTypes) => {
    return sequelize.define(
      "Livre",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        titre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        categorie: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        nombredepages: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        extrait: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        resume: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        auteurnom: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        auteurprenom: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        editeur: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        anneededition: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        moyennedappreciation: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        commentaires: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: [],
        },
        imagedecouverture: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        timestamps: true,
        createdAt: "created",
        updatedAt: false,
      }
    );
  };
  
  export { livreModel };
  