import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /// Error Message representing the message on some error
  public errorMessage = '';

  /// newsList property representing all the newses read from the service
  public newsList: Array<News> = [];

  /// Constructor injecting news service
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    /// Fetch all the news available on the component initialization
    this.newsService.getTrendingNews()
      .subscribe(response => {

        /// If there are any news in the response
        if (response['articles'] !== undefined &&
            response['articles'] !== undefined &&
            response['articles'].length > 0) {
          this.newsList = [...response['articles']];
        }
      },
        error => {
          console.log(error);
          if (error.status === 404) {
            this.errorMessage = 'Unable to access news server to fetch news';
          }
        });
  }
}
