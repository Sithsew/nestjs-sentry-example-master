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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_sentry_1 = require("@ntegral/nestjs-sentry");
const node_1 = require("@sentry/node");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(client, appService) {
        this.client = client;
        this.appService = appService;
        const breadcrumb = {
            type: 'sample',
            level: node_1.Severity.Info,
            category: 'custom',
            event_id: '1',
            message: 'Generic breadcrumb message',
        };
        client.addBreadcrumb(breadcrumb);
        client.debug('App Controller loaded');
        const scope = new node_1.Scope();
        scope.setTag('example', 'sampleTag');
        client.captureException(new Error('sample error'), () => scope);
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __param(0, nestjs_sentry_1.InjectSentry()),
    __metadata("design:paramtypes", [nestjs_sentry_1.SentryService,
        app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map