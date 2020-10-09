import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';


// import { HeaderComponent } from 'src/app/header/header.component';
// import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
// import { FooterComponent } from 'src/app/footer/footer.component';

// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'


describe('AppComponent', () => {

  let fixture;  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        // HttpClientTestingModule
      ],
      schemas:[NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent,
        // HeaderComponent,
        // DashboardComponent,
        // FooterComponent
      ],
      // providers:[HttpTestingController]
    }); 

    fixture = TestBed
    // .overrideComponent(DashboardComponent,{
    //   set:{
    //     template:''
    //   }
    // }).overrideComponent(HeaderComponent,{
    //   set:{
    //     template:''
    //   }
    // }).overrideComponent(FooterComponent,{
    //   set:{
    //     template:''
    //   }
    // })
    .createComponent(AppComponent);
    
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have property named title with value set to 'StackRoute Times`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('StackRoute Times');
  });
  
  it(`should have a header`,()=>{
    const footerComponent = fixture.debugElement.nativeElement.querySelector('app-header');
    expect(footerComponent).toBeTruthy();
  });
  
  it(`should have a dashboard`,()=>{
    const footerComponent = fixture.debugElement.nativeElement.querySelector('app-dashboard');
    expect(footerComponent).toBeTruthy();
  });

  it(`should have a footer`,()=>{
    const footerComponent = fixture.debugElement.nativeElement.querySelector('app-footer');
    expect(footerComponent).toBeTruthy();
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('news-level1-assignment app is running!');
  // });
});
