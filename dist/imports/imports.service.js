"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportsService = void 0;
const common_1 = require("@nestjs/common");
let ImportsService = class ImportsService {
    create(createImportDto) {
        return 'This action adds a new import';
    }
    findAll() {
        return `This action returns all imports`;
    }
    findOne(id) {
        return `This action returns a #${id} import`;
    }
    remove(id) {
        return `This action removes a #${id} import`;
    }
};
ImportsService = __decorate([
    common_1.Injectable()
], ImportsService);
exports.ImportsService = ImportsService;
//# sourceMappingURL=imports.service.js.map