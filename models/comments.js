module.exports = function(sequelize, DataTypes){
    var Comments = sequelize.define("Comments", {
        body: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
      });
      return Comments;
}