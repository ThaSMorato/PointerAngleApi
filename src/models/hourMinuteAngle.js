module.exports = (sequelize, DataTypes) => {
    const hourMinuteAngle = sequelize.define('hourMinuteAngle', {
      hour: DataTypes.INTEGER,
      minute: DataTypes.INTEGER,
      angle: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },{tableName: 'hourMinuteAngles'});
  
    return hourMinuteAngle;
  }