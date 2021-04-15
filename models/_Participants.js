export default (sequelize, DataTypes) => {
  const participants = sequelize.define(
    'participants',
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