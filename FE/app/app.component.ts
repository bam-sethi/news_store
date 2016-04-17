import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {NewsService} from './news.service';

@Component({
  selector: 'app-component',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app/app.component.html',
  providers: [HTTP_PROVIDERS, NewsService,]
})

export class AppComponent implements OnInit {

  constructor(private _newsService: NewsService) { }

  errorMessage: string;


  ngOnInit() { this.getNews(); }

  getNews() {
    this._newsService.getNews()
      .subscribe(
      res => {
        this.news = res
        console.log(this.news)
      },
      error => this.errorMessage = <any>error);

  }

}
