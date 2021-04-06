export default (sequelize, DataTypes) => {
    const outcomes = sequelize.define(
      'Outcomes',
      {
        outcome_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        outcome_name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return outcomes;
  };