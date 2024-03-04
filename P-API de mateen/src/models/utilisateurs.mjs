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
            },
            motdepasse: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dateenregistrement: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: "utilisateurs",
            timestamps: false,
        }
    );
}
export { utilisateursModel };