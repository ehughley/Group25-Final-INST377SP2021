export default (sequelize, DataTypes) => {
    const participants = sequelize.define(
      'Participants',
      {
        war_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: false
        },
        country_id: {
          type: DataTypes.STRING,
          allowNull: false
        },
        initiator: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return participants;
  };