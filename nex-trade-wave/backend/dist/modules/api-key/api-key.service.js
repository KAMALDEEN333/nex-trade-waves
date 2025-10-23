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
exports.ApiKeyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const api_key_entity_1 = require("./entities/api-key.entity");
const uuid_1 = require("uuid");
const typeorm_2 = require("@nestjs/typeorm");
let ApiKeyService = class ApiKeyService {
    constructor(apiKeysRepository) {
        this.apiKeysRepository = apiKeysRepository;
    }
    async createApiKey(userId, name, scopes, expiresAt) {
        const key = `nex_${(0, uuid_1.v4)()}`;
        const apiKey = this.apiKeysRepository.create({
            userId,
            key,
            name,
            scopes,
            expiresAt,
            rateLimit: 100, // default 100 requests per minute
        });
        return this.apiKeysRepository.save(apiKey);
    }
    async getUserApiKeys(userId) {
        return this.apiKeysRepository.find({ where: { userId } });
    }
    async validateApiKey(key) {
        const apiKey = await this.apiKeysRepository.findOne({ where: { key } });
        if (!apiKey || !apiKey.isActive) {
            return null;
        }
        if (apiKey.expiresAt && new Date() > apiKey.expiresAt) {
            return null;
        }
        return apiKey;
    }
    async revokeApiKey(keyId) {
        await this.apiKeysRepository.update(keyId, { isActive: false });
        return this.apiKeysRepository.findOne({ where: { id: keyId } });
    }
    async rotateApiKey(keyId) {
        const newKey = `nex_${(0, uuid_1.v4)()}`;
        await this.apiKeysRepository.update(keyId, { key: newKey });
        return this.apiKeysRepository.findOne({ where: { id: keyId } });
    }
};
exports.ApiKeyService = ApiKeyService;
exports.ApiKeyService = ApiKeyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(api_key_entity_1.ApiKey)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ApiKeyService);
//# sourceMappingURL=api-key.service.js.map