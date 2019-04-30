module.exports = function(sequelize, DataTypes) {
    var Blog = sequelize.define("Blog", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      },
      myDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
    return Blog;
  };
  