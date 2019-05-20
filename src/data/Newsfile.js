import React from 'react';

const NEWS_APIKEY = '06672623ef624ef892f73d3e7bb8b629';
let uri = 'https://newsapi.org/v2/everything?';
let domains = 'bbc.co.uk';

const NewsApi = require('newsapi');
const api = new NewsApi(NEWS_APIKEY)

export async function collectNews (){
    var fullUrl = `${uri}domains=${domains}&apiKey=${NEWS_APIKEY}`;
    // let newsArticles;
    // try{
    //     var response = await fetch(fullUrl).then(res => res.json);
    //     newsArticles = response.articles;
    //     await localCaching(newsArticles);
    // }catch(error){
    //     console.error(error);
    // }
    // return newsArticles;
    // var articles
    // api.v2.everything({
    //     domains: domains,
    //     sources: 'bbc-news',
    //     page: 1
    // }).then(res => {
    //     articles = res
    // });
    var result = await fetch(fullUrl).then(response => response.json);
    return result.articles;
};
async function localCaching(tobeCached){
     
}