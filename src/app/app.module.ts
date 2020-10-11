import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon'; 
import { MatBadgeModule } from '@angular/material/badge';
import { NewsService } from './services/news.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    NewsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
