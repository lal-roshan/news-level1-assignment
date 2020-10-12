import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public errorMessage = '';

  public newsList: Array<News> = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTrendingNews()
      .subscribe(response => {
        if (response['status'] === 'ok') {
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
