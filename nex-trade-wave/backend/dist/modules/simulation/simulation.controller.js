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
exports.SimulationController = void 0;
const common_1 = require("@nestjs/common");
const simulation_service_1 = require("./simulation.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let SimulationController = class SimulationController {
    constructor(simulationService) {
        this.simulationService = simulationService;
    }
    async getAllLessons() {
        return this.simulationService.getAllLessons();
    }
    async getLesson(id) {
        return this.simulationService.getLessonById(id);
    }
    async getUserProgress(req) {
        return this.simulationService.getUserProgress(req.user.userId);
    }
    async markLessonComplete(req, lessonId, body) {
        return this.simulationService.markLessonComplete(req.user.userId, lessonId, body.score);
    }
};
exports.SimulationController = SimulationController;
__decorate([
    (0, common_1.Get)("lessons"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SimulationController.prototype, "getAllLessons", null);
__decorate([
    (0, common_1.Get)("lessons/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SimulationController.prototype, "getLesson", null);
__decorate([
    (0, common_1.Get)("progress"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SimulationController.prototype, "getUserProgress", null);
__decorate([
    (0, common_1.Post)("progress/:lessonId"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)("lessonId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], SimulationController.prototype, "markLessonComplete", null);
exports.SimulationController = SimulationController = __decorate([
    (0, swagger_1.ApiTags)("simulation"),
    (0, common_1.Controller)("simulation"),
    __metadata("design:paramtypes", [simulation_service_1.SimulationService])
], SimulationController);
//# sourceMappingURL=simulation.controller.js.map