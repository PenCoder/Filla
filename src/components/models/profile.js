// const Seq = require('sequelize');

// const profile = (sequelize, DataTypes) => {
//     const Profile = sequelize.define('profile',
//     {
//         id: {
//             type: sequelize.UUID,
//             defaultValue: sequelize.UUID,
//             primaryKey: true,
//         },
//         name: { type: sequelize.String },
//         avatar: { type: sequelize.String },
//         tag: {type: sequelize.String}
//     });
//     Profile.associate = (models) => {
//         Profile.hasMany(models.Conversation);
//     }
//     return Profile;
// };

// export default profile;