// Définition du modèle de la table utilisateurs
const utilisateursModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "Utilisateur",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            pseudo: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Le pseudo ne doit pas être nul.",
                    },
                    notEmpty: {
                        msg: "Le pseudo ne doit pas être vide.",
                    },
                },
            },
            motDePasse: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Le mot de passe ne doit pas être nul.",
                    },
                    notEmpty: {
                        msg: "Le mot de passe ne doit pas être vide.",
                    },
                },
            },
            dateEnregistrement: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "La date d'enregistrement ne doit pas être nulle.",
                    },
                    notEmpty: {
                        msg: "La date d'enregistrement ne doit pas être vide.",
                    },
                    isDate: {
                        msg: "La date d'enregistrement doit être une date valide.",
                    },
                },
            },
        },
        {
            tableName: "utilisateurs",
            timestamps: false,
        }
    );
}
export { utilisateursModel };