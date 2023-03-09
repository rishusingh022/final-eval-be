'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contentForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contentForm.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      formName: DataTypes.STRING,
      formFields: DataTypes.ARRAY(DataTypes.JSON),
    },
    {
      sequelize,
      modelName: 'contentForm',
    }
  );
  return contentForm;
};
