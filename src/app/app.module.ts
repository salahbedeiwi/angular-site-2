import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//to include a router: you must import RouterModule and Routes, Forms
import { RouterModule, Routes } from '@angular/router'; //importing two components inside @angular/router downloaded on node_modules
import { AppRoutingModule } from './app-routing.module';

//import all components on my applications
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

//Enter all routing url here. Once the url has these path name, it will redirect calling these components assigned to it
const appRoutes: Routes = [
  //note: order of these routes matter, first match wins and display
  { path: 'home', component: MainPageComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutUsComponent, data: { title: 'About Us' }  },
  { path: 'contact', component: ContactUsComponent, data: { title: 'Contact  Us' } },
  { path: 'login', component: LogInComponent, data: { title: 'Login Page' }  },//data property is accessible with every activated route
  { path: 'contact/admin', component: ContactUsComponent, data: { title: 'Contact  Us' } },//url: website/contact/admin
  { path: 'signup', component: SignUpComponent, data: { title: 'Signup Page' }  }, 
  { path: 'portfolio', component: PortfolioComponent, data: { title: 'All Portfolios Page' }  },
  { path: 'portfolio/:id', component: PortfolioComponent, data: { title: 'Show specific Portfolio Page' }  }, //url: portfolio/2 or portfolio/1 or portfolio/id:2
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //empty path. usually display the default
  { path: '#', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } //wild card, if YRL doesn't match any paths for routes defined here on our configuration. 404 page or Pagenotfound
];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MainPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    SignUpComponent,
    PortfolioComponent
  ],
  imports: [
    //add router/navigation links: this line for the router to call @angular/router
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only - very much every time i click on router/link, shows on console.log as Router Event
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
