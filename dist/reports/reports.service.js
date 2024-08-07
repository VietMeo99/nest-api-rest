"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const reports_json_1 = __importDefault(require("../db/pickbazar/reports.json"));
const report_entity_1 = require("./entities/report.entity");
const myReports = class_transformer_1.plainToClass(report_entity_1.MyReports, reports_json_1.default);
let ReportsService = class ReportsService {
    constructor() {
        this.myReports = myReports;
    }
    findMyReports() {
        return {
            data: myReports,
        };
    }
};
ReportsService = __decorate([
    common_1.Injectable()
], ReportsService);
exports.ReportsService = ReportsService;
//# sourceMappingURL=reports.service.js.map