export default (sequelize, DataTypes) => {
    const WhereFought = sequelize.define(
      'WhereFought',
      {
        war_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: false
        },
        location_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return WhereFought;
  };