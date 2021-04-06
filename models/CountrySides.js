export default (sequelize, DataTypes) => {
    const CountrySides = sequelize.define(
      'CountrySides',
      {
        side_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: false
        },
        country_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return CountrySides;
  };