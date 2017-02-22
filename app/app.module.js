"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//importing modules
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
//components
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home/home.component');
var manage_component_1 = require('./components/manage/manage.component');
var addProduct_component_1 = require('./components/addProduct/addProduct.component');
var editProduct_component_1 = require('./components/editProduct/editProduct.component');
//services
var shared_service_1 = require('./components/shared.service');
//pipes
var pipes_1 = require('./components/pipes');
//Routes
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'manage', component: manage_component_1.ManageComponent },
    { path: 'manage/product/add', component: addProduct_component_1.AddProductComponent },
    { path: 'manage/product/edit/:id', component: editProduct_component_1.EditProductComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
//decorator
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, manage_component_1.ManageComponent, addProduct_component_1.AddProductComponent, pipes_1.TruncatePipe, editProduct_component_1.EditProductComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [shared_service_1.SharedService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map