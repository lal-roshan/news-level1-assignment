import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /// Property holding the title name
  @Input() public title;

  ///Property representing the count of favorites items
  @Input() public favoriteCount;

  constructor() { }

  ngOnInit() {
  }

  /// Method for toggling the menu items display in small screens
  toggleCollapse() {
    const navbarToggler = document.getElementById('navbarToggler');
    if (navbarToggler.classList.contains('collapse')) {
      navbarToggler.classList.remove('collapse');
    } else {
      navbarToggler.classList.add('collapse');
    }
  }
}
