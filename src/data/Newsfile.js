import React from 'react';
import {AsyncStorage} from 'react-native';

const NEWS_APIKEY = '06672623ef624ef892f73d3e7bb8b629';
let uri = 'https://newsapi.org/v2/everything?';
let domains = 'bbc.co.uk';

const NewsApi = require('newsapi');
const api = new NewsApi(NEWS_APIKEY)

export async function collectNews (){
    var fullUrl = `${uri}domains=${domains}&apiKey=${NEWS_APIKEY}`;

    var articles = api.v2.everything({
        domains: domains,
        sources: 'bbc-news',
        page: 1
        })
        .then(res => {
            localCaching(res.articles);
            return res.articles;
        })
        .catch((e) => console.error(e));
        
    return articles
};
async function localCaching(tobeCached){
     const existing = await AsyncStorage.getItem('newsArticles');
     var newArticles = JSON.parse(existing);
     if(!newArticles){
         newArticles = [];
     }
     newArticles.push(tobeCached);

     await AsyncStorage.setItem('newsArticles')
        .catch(() => {
            console.log('An error occurred saving!');
        })
}