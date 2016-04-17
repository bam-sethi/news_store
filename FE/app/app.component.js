System.register(['angular2/core', 'angular2/http', './news.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, news_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (news_service_1_1) {
                news_service_1 = news_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_newsService) {
                    this._newsService = _newsService;
                }
                AppComponent.prototype.ngOnInit = function () { this.getNews(); };
                AppComponent.prototype.getNews = function () {
                    var _this = this;
                    this._newsService.getNews()
                        .subscribe(function (res) {
                        _this.news = res;
                        console.log(_this.news);
                    }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-component',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/app.component.html',
                        providers: [http_1.HTTP_PROVIDERS, news_service_1.NewsService,]
                    }), 
                    __metadata('design:paramtypes', [news_service_1.NewsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map