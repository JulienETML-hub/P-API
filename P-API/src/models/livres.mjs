const livreModel = (sequelize, DataTypes) => {
    return sequelize.define(
      "Livre",
      {
        id_livre: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        titre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        catégorie: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        nombre_de_pages: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        extrait: {
          type: DataTypes.STRING, // Assurez-vous que cela correspond au type de données approprié pour stocker le chemin du fichier PDF
          allowNull: false,
        },
        résumé: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        auteur_nom: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        auteur_prénom: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        éditeur: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        année_dedition: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        moyenne_dappréciation: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        commentaires: {
          type: DataTypes.ARRAY(DataTypes.JSONB), // Utilisez le type de données JSONB pour stocker des tableaux de commentaires JSON
          allowNull: true,
          defaultValue: [],
        },
        image_de_couverture: {
          type: DataTypes.STRING, // Assurez-vous que cela correspond au type de données approprié pour stocker le chemin de limage
          allowNull: false,
        },
      },
      {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false,
      }
    );
  };
  
  export { livreModel };
  