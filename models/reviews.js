const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

Reviews.init(
    {
      content: {
        type: DataTypes.STRING,
        
      },
      rating: {
        type: DataTypes.NUMBER
    
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.date
       
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'reviews'
    }
  );
  

module.exports = Reviews;