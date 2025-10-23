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
exports.ApiKeyController = void 0;
const common_1 = require("@nestjs/common");
const api_key_service_1 = require("./api-key.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_api_key_dto_1 = require("./dto/create-api-key.dto");
const swagger_1 = require("@nestjs/swagger");
let ApiKeyController = class ApiKeyController {
    constructor(apiKeyService) {
        this.apiKeyService = apiKeyService;
    }
    async createApiKey(createApiKeyDto, req) {
        return this.apiKeyService.createApiKey(req.user.userId, createApiKeyDto.name, createApiKeyDto.scopes, createApiKeyDto.expiresAt);
    }
    async getUserApiKeys(req) {
        return this.apiKeyService.getUserApiKeys(req.user.userId);
    }
    async revokeApiKey(id) {
        return this.apiKeyService.revokeApiKey(id);
    }
    async rotateApiKey(id) {
        return this.apiKeyService.rotateApiKey(id);
    }
};
exports.ApiKeyController = ApiKeyController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_api_key_dto_1.CreateApiKeyDto, Object]),
    __metadata("design:returntype", Promise)
], ApiKeyController.prototype, "createApiKey", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeyController.prototype, "getUserApiKeys", null);
__decorate([
    (0, common_1.Put)(":id/revoke"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiKeyController.prototype, "revokeApiKey", null);
__decorate([
    (0, common_1.Put)(":id/rotate"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApiKeyController.prototype, "rotateApiKey", null);
exports.ApiKeyController = ApiKeyController = __decorate([
    (0, swagger_1.ApiTags)("api-keys"),
    (0, common_1.Controller)("api-keys"),
    __metadata("design:paramtypes", [api_key_service_1.ApiKeyService])
], ApiKeyController);
//# sourceMappingURL=api-key.controller.js.map