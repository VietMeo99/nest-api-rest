"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersModule = void 0;
const common_1 = require("@nestjs/common");
const newsletters_controller_1 = require("./newsletters.controller");
const newsletters_service_1 = require("./newsletters.service");
let NewslettersModule = class NewslettersModule {
};
NewslettersModule = __decorate([
    common_1.Module({
        controllers: [newsletters_controller_1.NewslettersController],
        providers: [newsletters_service_1.NewslettersService],
    })
], NewslettersModule);
exports.NewslettersModule = NewslettersModule;
//# sourceMappingURL=newsletters.module.js.map