export default (sequelize, DataTypes) => {
    const countries = sequelize.define(
      'Countries',
      {
        side_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        country_name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return countries;
  };