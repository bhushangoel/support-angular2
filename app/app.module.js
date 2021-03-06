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
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
require('./components/rxjs.service');
//components
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
//services
var shared_service_1 = require('./components/shared.service');
var user_profile_service_1 = require('./components/authComponent/login/user-profile.service');
var can_activate_service_1 = require('./components/can-activate.service');
//pipes
var pipes_1 = require('./components/pipes');
//decorator
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, forms_1.ReactiveFormsModule],
            declarations: [app_component_1.AppComponent, pipes_1.TruncatePipe, app_routing_module_1.RoutableComponents],
            bootstrap: [app_component_1.AppComponent],
            providers: [shared_service_1.SharedService, can_activate_service_1.CanActivateAuthGuard, user_profile_service_1.UserProfileService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map