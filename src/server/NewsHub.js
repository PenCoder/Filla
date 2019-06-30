import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const NEWS_APIKEY = '06672623ef624ef892f73d3e7bb8b629';
let uri = 'https://newsapi.org/v2/everything?';
let domains = 'bbc.co.uk';

const NewsApi = require('newsapi');
const api = new NewsApi(NEWS_APIKEY)

export async function collectNews (isOnline = false){
    var fullUrl = `${uri}domains=${domains}&apiKey=${NEWS_APIKEY}`;
    var articles = []
    if (isOnline){
        articles = api.v2.everything({
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
    }else {
        articles = await loadLocalData();
        return articles;
    }
};
async function localCaching(tobeCached = []){
    var stored = await loadLocalData()
    tobeCached.forEach((news, index) => {
        stored.push(news);
    })
    await AsyncStorage.setItem('newsArticles', JSON.stringify(stored))
    .catch(() => {
        console.log('An error occurred saving!');
    })
};
async function loadLocalData(){
    var newsArticles = [];
    const localData = await AsyncStorage.getItem('newsArticles', (error, data) =>{
        newsArticles = JSON.parse(data);
    });
    return newsArticles;
}