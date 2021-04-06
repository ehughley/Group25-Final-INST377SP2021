export default (sequelize, DataTypes) => {
    const wars = sequelize.define(
      'Wars',
      {
        war_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        war_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        start_date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        end_date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        battle_deaths : {
          type: DataTypes.INTEGER
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return wars;
  };