import { Component, Input, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public newsItem: News = new News();

  public confirmationMessage: string = '';

  public errorMessage: string = '';

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  addNewsToReadLater(newsItem){
    this.newsService.addNews(newsItem)
    .subscribe(response => {
      console.log(response);
      if(response["status"] === "ok"){
        this.confirmationMessage = 'This News Article is Bookmarked';
      }
    },
    error => {
      if(error.status === 404){
        this.errorMessage = 'Unable to access news server to add this news item';
      }
      else{
        this.errorMessage = 'Internal Server Error, Please Try Again Later';
      }
    });
  }

}
