import AsyncStorage from  '@react-native-community/async-storage';
import  UUIDGenerator from 'react-native-uuid-generator'

export default class PostHub {
    constructor(){}

    savePost = async (post) => {
        var posts = [];
        var saved = false;
        try {
            var stored = await AsyncStorage.getItem('Filla_Async_Key:Posts');
            if(stored){
                var savedPosts = JSON.parse(stored);
                if (Array.isArray(savedPosts)){
                    savedPosts.forEach((s, index) => {
                        posts.push(s);
                    })
                }else{
                    posts.push(savedPosts);
                }
            }
            if(Array.isArray(post)){
                post.forEach((p, index) => {
                    p.post_id = UUIDGenerator.getRandomUUID();
                    posts.push(p);
                })
            }else{
                post.post_id = UUIDGenerator.getRandomUUID();
                posts.push(post);
            }

            await AsyncStorage.setItem('Filla_Async_Key:Posts', JSON.stringify(posts), (error) => {
                saved = true;
            })
            // await AsyncStorage.removeItem('Filla_Async_Key:Posts')
            
        } 
        catch (error) {
            saved = false
        } finally{
            return saved;
        }
        
        // await AsyncStorage.removeItem('Filla_Async_Key:Posts')
        
    }

    collectPosts = async (isOnline = false) => {
        var posts = [];
        if (!isOnline){
            var stored = await AsyncStorage.getItem('Filla_Async_Key:Posts')  
            if(stored){
                var savedPosts = JSON.parse(stored)
                if (Array.isArray(savedPosts)){
                    savedPosts.forEach((d, index) => {
                        posts.push(d);
                    })
                }
            }
        }
        return posts;
    }
}
