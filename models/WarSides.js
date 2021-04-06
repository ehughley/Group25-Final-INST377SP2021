export default (sequelize, DataTypes) => {
    const WarSides = sequelize.define(
      'WarSides',
      {
        war_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: false
        },
        side_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return WarSides;
  };