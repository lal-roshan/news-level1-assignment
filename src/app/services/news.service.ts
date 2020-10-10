import { Injectable } from '@angular/core';
import { News } from '../models/news';


//decorate class to make it injectable
export class NewsService {

  //assign the apikey generated to access APIs of newsapi.org to api_key property
  //steps to generate apikey are available in README.md file
  api_key: string = "ae9d31dc385f49428d73cc27ac4dea15";

  // inject the HttpClient dependency that will be used to make http request
  constructor() { }


  public getTrendingNews(){
    //this function should make a get request to fetch trending news provided by newsapi.org
  }

  public addNews(newsItem:News){
    //this function should make a post request to save news item to db.json in server
  }


}
