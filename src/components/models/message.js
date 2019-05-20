// const Seq = require('sequelize');

// const message = (sequelize, DataTypes) => {
//     const Message = sequelize.define('message', {
//         text: DataTypes.STRING,
//         user: sequelize.JSON, 
//         _id: {
//             type: sequelize.UUID,
//             defaultValue: sequelize.UUIDV4,
//             primaryKey: true
//         }
//     });
//     Message.associate = (models) => {
//         Message.belongsTo(models.Conversation)
//     }
//     return Message;
// }

// export default message;