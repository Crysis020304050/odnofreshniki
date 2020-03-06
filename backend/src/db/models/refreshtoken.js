'use strict';
module.exports = (sequelize, DataTypes) => {
  const RefreshToken = sequelize.define('RefreshToken', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    refreshToken: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  RefreshToken.associate = function (models) {
    RefreshToken.belongsTo( models.User, {
      targetKey: 'id',
      foreignKey: 'userId',
    } );
  };
  return RefreshToken;
};