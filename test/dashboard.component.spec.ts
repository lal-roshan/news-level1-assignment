import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { DashboardComponent } from '../src/app/dashboard/dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { NewsService } from 'src/app/services/news.service';
import { Observable } from 'rxjs';


import { of, throwError } from  'rxjs';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let newsService : NewsService;
  
  let newsItems : Object ={
    "articles":
    [
    {
      "author": "Times Of India",
      "title": "Mumbai terror attack mastermind Hafiz Saeed charged by Pakistani court with terror-financing - Times of India",
      "description": "Pakistan News: Hafiz Saeed, the Mumbai terror attack mastermind and chief of the banned JuD, was indicted on Wednesday by a Pakistani anti-terrorism court on terror-",
      "url": "https://timesofindia.indiatimes.com/world/pakistan/mumbai-terror-attack-mastermind-hafiz-saeed-charged-by-pakistani-court-with-terror-financing/articleshow/72470392.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-72470383,width-1070,height-580,imgsize-310799,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2019-12-11T07:46:00Z",
      "content": "Copyright © 2019 Bennett, Coleman &amp; Co. Ltd. All rights reserved. For reprint rights: Times Syndication Service",
      "id": 1
    },
    {
      "author": "Hindustan Times",
      "title": "Jayeshbhai Jordaar: Arjun Reddy actor Shalini Pandey to make Bollywood debut opposite Ranveer Singh - Hindustan Times",
      "description": "Shalini Pandey says she is ‘very fortunate to be sharing screen space with Ranveer Singh who is one of the biggest superstars of our generation’.",
      "url": "https://www.hindustantimes.com/bollywood/jayeshbhai-jordaar-arjun-reddy-actor-shalini-pandey-to-make-bollywood-debut-opposite-ranveer-singh/story-33vzmNqEOVlZkz2jllSZUJ.html",
      "urlToImage": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/12/11/Pictures/_846a2632-1be3-11ea-9a53-e5149fe5d3ed.jpg",
      "publishedAt": "2019-12-11T06:57:50Z",
      "content": "Actor Shalini Pandey, who featured in the Telugu blockbuster Arjun Reddy, will make her Bollywood debut opposite Ranveer Singh in Jayeshbhai Jordaar. The film is produced by Yash Raj Films. \r\nSpeaking with Hindustan Times, Shalini said about her debut, “I’ve … [+1258 chars]",
      "id": 2
    }
  ]};
  

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ DashboardComponent ],
      schemas:[NO_ERRORS_SCHEMA],
      providers:[HttpTestingController,//NewsService
        {
        provide:NewsService,
        useClass:class NewsServiceStub{
          getTrendingNews():Observable<Object>{
             return of(newsItems);
          }
        }
      }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    newsService = TestBed.get(NewsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // fit('should contain card component for displaying trending news',fakeAsync(()=>{
  //   spyOn(newsService,'getTrendingNews').and.callThrough().and.returnValue(of(newsItems));
  //   fixture.detectChanges();
    
  //   let newsCard = fixture.debugElement.query(By.css('app-card'));
  //   expect(newsCard).toBeTruthy();
  // }))

  // fit('should handle error 404 when resource not found',fakeAsync(()=>{
  //   newsService.trending_news_api_url="http://localhost:3000/invalidapi/news";
  //   spyOn(newsService,'getTrendingNews').and.callThrough().and.returnValue(throwError('404'));

  //   fixture.detectChanges();
  //   let newsCard = fixture.debugElement.query(By.css('app-card'));
  //   expect(newsCard).toBeNull();
  // }))

//ALTERNATIVE WITH STUB

it('should contain card component for displaying trending news',fakeAsync(()=>{
  spyOn(newsService,'getTrendingNews').and.callThrough();//.and.returnValue(of(newsItems));
  fixture.detectChanges();
  let newsCard = fixture.debugElement.nativeElement.querySelectorAll('app-card');
  // let newsCard = fixture.debugElement.query(By.css('app-card'));
  expect(newsCard).toBeTruthy();
}))

it('should handle error 404 when resource not found',fakeAsync(()=>{
  newsService.trending_news_api_url="http://localhost:3000/invalidapi/news";
  spyOn(newsService,'getTrendingNews').and.callThrough().and.returnValue(throwError({status:404,message:'Unable to access news server to fetch news'}));

  fixture.detectChanges();
  let newsCard = fixture.debugElement.query(By.css('app-card'));
  expect(newsCard).toBeNull();
  expect(component.errorMessage.length).toBeGreaterThan(0);
  expect(component.errorMessage).toEqual('Unable to access news server to fetch news')
}))


});
