
// var Realm = require('realm');
import AsyncStorage from  '@react-native-community/async-storage';
import  UUIDGenerator from 'react-native-uuid-generator'

class UserService {
    constructor(){
    }
    async registerUser(newUser)  {
        // var response = newUser.response;
        var response = {
            username: null,
            contact: null,
            pwd: null,
            success: null
        }
        try {
            if(newUser.username){
                if(newUser.contact){
                    if(newUser.pwd){
                        
                        newUser.user_id = UUIDGenerator.getRandomUUID()
                        newUser.created = new Date();
                        newUser.updated = newUser.created;
                        
                        await AsyncStorage.getItem('Filla_Async_Key:user', async (error, data) =>{
                            var users = [];
                            
                            if(data){
                                var savedUsers = JSON.parse(data)
                                
                                if(savedUsers.find(user => user.username == newUser.username)){
                                    response.username = 'Username already in use.';
                                    return;
                                }
                                if (savedUsers.find(user => user.contact == newUser.contact)){
                                    response.contact = 'Contact can be registered once.';
                                    return;
                                }
                                users.push(savedUsers);
                            }
                            var length = users.push(newUser)
                            if(length > 0){
                                await AsyncStorage.setItem('Filla_Async_Key:user', JSON.stringify(users));
                                response.success = 'Successfully saved!';
                            }
                        })
                    }else{
                        response.pwd = 'No password provided';
                    }
                }else{
                    response.contact = 'No contact info provided';
                }
            }else{
                response.username = 'Please provide username';
            }
        } catch (error) {
            response.success = null;
        }finally{
            return response;
        }
    }
    async registerProfile(profile){
        try{
            if (!profile){
                return 'No profile provided';
            }else if (!profile.contact){
                return 'Please provide contact info';
            }
            // Load Profiles
            await AsyncStorage.getItem('Filla_Async_Key:user_profiles', 
                async (error, data) => {
                    var profiles = JSON.parse(data);
                    if (!profiles){
                        profiles = []
                    }
                    // Add new profile to array
                    profiles.push(profile);
                    // Save profile
                    await AsyncStorage.setItem('Filla_Async_Key:user_profiles', JSON.stringify(profiles))
                })
                return 'Data saved successfully!';
        }catch(e){
            return 'Saving data unsuccessful'
        }
    }
    async loginUser(loggedUser){
        var response = {
            username: '',
            pwd: '',
        }
        var profile = null;
        var userId = null;
        try {
            if (loggedUser.username){
                if (loggedUser.pwd){

                    await AsyncStorage.getItem('Filla_Async_Key:user', (error, data) => {
                        if (data){
                            var users = JSON.parse(data);
                            var user = users.find(u => u.username == loggedUser.username)
                            if (user){
                                userId = user.pwd === loggedUser.pwd ? user.user_id : null;
                            }
                        }
                    });
                    if (userId){
                        await AsyncStorage.getItem('Filla_Async_Key:user_profiles', (error, data) => {
                            if (data){
                                var profiles = JSON.parse(data);
                                profile = profiles.find(p => p.user_id == userId);
                            }
                        })
                    }
                }else {
                    response.pwd = 'Please provide password';
                }
            }else {
                response.username = 'No username provided!';
            }
        } catch (error) {
            
        } finally{
            return profile;
        }
        
    }
}
module.exports = UserService
//     registerProfile = () => {
//         const {name, contact, pp, created, updated} = this.profile;
//         const {username, pwd } = this.user;
//         var profileId = UUIDGenerator.getRandomUUID().then((id) => id);
//         if(username){
//             if (pwd){
//                 if (contact){
//                     if(!name){
//                         this.profile.name = username
//                     }
//                     try{
//                         profileDb.write(() => {
//                             profileDb.create('user_profile', {
//                                 profile_id: profileId,
//                                 name: name,
//                                 contact: contact,
//                                 pp: pp,
//                                 created: new Date(),
//                                 updated: new Date()
//                             })
//                         })
//                         userDb.write(() => {
//                             userDb.create('user', {
//                                 user_id: UUIDGenerator.getRandomUUID().then((id) => id),
//                                 username: username,
//                                 pwd: pwd,
//                                 profile_id: profileId,
//                                 created: new Date(),
//                                 updated: new Date()
//                             })
//                         })
//                         return 'Saved successfully!';
//                     }catch(e){
//                         return 'User data was unsuccessfully saved. Check inputs!';
//                     }
//                 }else{
//                     return 'No contact provided!';
//                 }
//             }else{
//                 return 'Please provide password';
//             }
//         }else{
//             return 'Please enter your username!';
//         }
//     }

//     loginUser = () => {
//         var verifiedUser = null;
//         var profile
//         if (user){
//             const {username, pwd} = this.user;
//             if(username){
//                 if (pwd){
//                     verifiedUser = userDb.objects('user').filtered(`user_id = ${user_id} AND pwd = ${pwd}`)[0]
//                 }
//             }
//         }
//         if (verifiedUser){
//             return getProfile(verifiedUser.profile_id);
//         }
//         return null;
//     }
//     getProfile = (profileId) => {
//         return profileDb.objects('user_profile')
//                 .filtered(`profile_id = ${profileId}`)[0];
//     }
// }
// // var user = new Realm({
// //     schema: [{
// //         name: 'User',
// //         primaryKey: 'id',
// //         properties: {
// //             id: {type: 'string', indexed: true},
// //             phone: 'string',
// //             pwd: 'string',
// //             created: 'date',
// //             updated: 'date',
// //             profileId: 'string'
// //         }
// //     }]
// // });

// // var UserService = {
// //     getUsers: ((sortBy) => {
// //         if(sortBy)
// //             return user.objects('User').sorted(sortBy);
// //     }),
// //     saveUser: ((newUser) =>{
// //         if (user.objects('User').filtered(`name = '${user.name}`).length){
// //             return false;
// //         };
// //         user.write(() => {
// //             newUser.created = new Date();
// //             newUser.updated = new Date();
// //             user.create('User', newUser);
// //         })
// //         return true;
// //     }),
// //     updateUser: ((updatedUser) => {

// //     })
// // };

// // module.exports = UserService