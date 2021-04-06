export default (sequelize, DataTypes) => {
    const locations = sequelize.define(
      'locations',
      {
        location_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        location_name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return locations;
  };