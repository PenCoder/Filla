// import { Sequelize } from 'sequelize/types';

// const Seq = require('sequelize');

// const conversation = (sequelize, DataTypes) => {
//     const Conversation = sequelize.define('conversation', {
//         _id: {
//             type: sequelize.UUID,
//             defaultValue: Sequelize.UUIDV4,
//             primaryKey: true
//         },
//         profileId: { type: sequelize.UUID},
//     });
//     Conversation.associate = (models) => {
//         Conversation.belongsTo(models.Profile);
//     };
//     Conversation.associate = (models) => {
//         Conversation.hasMany(models.Message, {onDelete: 'CASCADE'});
//     }
//     return Conversation;
// }

// export default conversation;