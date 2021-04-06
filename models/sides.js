export default (sequelize, DataTypes) => {
    const sides = sequelize.define(
      'Sides',
      {
        side_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        side_name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return sides;
  };