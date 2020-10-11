import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable()
// decorate class to make it injectable
export class NewsService {

  // assign the apikey generated to access APIs of newsapi.org to api_key property
  // steps to generate apikey are available in README.md file
  private readonly apiKey = 'ae9d31dc385f49428d73cc27ac4dea15';

  public trending_news_api_url = 'https://newsapi.org/v2/top-headlines?country=in&apikey='
    + this.apiKey + '&page=1/';

  private readonly bookmarks_url = 'http://localhost:3000/api/v1/news';

  // inject the HttpClient dependency that will be used to make http request
  constructor(private httpClient: HttpClient) { }


  public getTrendingNews() {
    // this function should make a get request to fetch trending news provided by newsapi.org
    return this.httpClient.get(this.trending_news_api_url);
  }

  public addNews(newsItem: News): Observable<News> {
    // this function should make a post request to save news item to db.json in server
    return this.httpClient.post<News>(this.bookmarks_url, newsItem);
  }
}
