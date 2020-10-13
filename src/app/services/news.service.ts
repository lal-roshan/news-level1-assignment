import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable()

export class NewsService {

  /// The API key for getting the news
  private readonly apiKey = 'ae9d31dc385f49428d73cc27ac4dea15';

  /// The url to news api
  public trending_news_api_url = 'https://newsapi.org/v2/top-headlines?country=in&apikey='
    + this.apiKey + '&page=1/';

  /// The url for read later news
  private readonly bookmarks_url = 'http://localhost:3000/api/v1/news';

  /// Constructor injecting HttpClient
  constructor(private httpClient: HttpClient) { }

  /// Method for fetching the trending news
  /// <returns>The response from the news API</returns>
  public getTrendingNews() {
    return this.httpClient.get(this.trending_news_api_url);
  }

  /// Method for adding the news to read later 
  /// <param name="newsItem">Represents the news to be added to read later</param>
  /// <returns>Returns the News item added</returns>
  public addNews(newsItem: News): Observable<News> {
    return this.httpClient.post<News>(this.bookmarks_url, newsItem);
  }
}
