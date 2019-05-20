// const Seq = require('sequelize');

// const user = (sequelize, DataTypes) => {
//     const User = sequelize.define('user', {
//         _id: {
//             type: sequelize.UUID,
//             defaultValue: sequelize.UUID,
//             primaryKey: true,
//         },
//         phone: {
//             type: sequelize.String,
//             unique: true,
//         },
//         password: { type: sequelize.String },
//         profileId: { type: sequelize.UUID }
//     });

//     User.findonLogin = async (phone, pw) => {
//         var user = await User.findOne({
//             where: {phone: phone}
//         });
//         Profile = null;
//         if (!user){
//             if (user.pw === pw)
//                 Profile = user.profileId;
//         }
//         return Profile;
//     };
    
//     return User;
// };

// export default user;