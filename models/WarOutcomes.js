export default (sequelize, DataTypes) => {
  const WarOutcomes = sequelize.define(
    'war_outcomes',
    {
      side_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false
      },
      outcome_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return WarOutcomes;
};