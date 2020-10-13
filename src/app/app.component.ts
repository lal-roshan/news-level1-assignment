import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /// Property representing the title of the website
  public title = 'StackRoute Times';
  public favoriteCount = 0;
}
