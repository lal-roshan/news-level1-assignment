import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public title;
  @Input() public favoriteCount;

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(){
    let navbarToggler = document.getElementById('navbarToggler');
    if(navbarToggler.classList.contains('collapse')){
      navbarToggler.classList.remove('collapse');
    }
    else{
      navbarToggler.classList.add('collapse');
    }
  }

}
