var UUIDGenerator = require('react-native-uuid-generator');

class UserModel{
    constructor(){
        this.user_id = null;
        this.username = null;
        this.pwd = null;
        this.contact = null;
        this.avatar = null;
        this.created = null;
        this.updated = null;
        this.response = {
            username: '',
            pwd: '',
            contact: '',
            success: ''

        }
    }
}

module.exports = UserModel