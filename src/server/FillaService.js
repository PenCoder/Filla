import {NetInfo} from 'react-native';
import PostHub from './PostHub';
import {collectNews} from './NewsHub';

export default class FillaService {
    constructor(){
        this.postHub = new PostHub();
        this.posts = [];
        this.articles  = [];

        this.getNews.bind(this);
        this.getPosts.bind(this);
        this.allFilla.bind(this);
    }

    // News from News API
    getNews = async (isOnline = false) => {
        this.articles = await collectNews(isOnline);
        return this.articles
    }

    // Collect Posts
    getPosts = async (isOnline = false) => {
        this.posts = await this.postHub.collectPosts(isOnline);
        return this.posts
    }

    allFilla = async () => {
        var isOnline = NetInfo.getConnectionInfo()
                .then(async connectionInfo => { return connectionInfo.type !== 'none'})
        
        this.posts = await this.postHub.collectPosts(false);
        this.articles = await collectNews(false);

        return this.posts.concat(this.articles)
    }
}