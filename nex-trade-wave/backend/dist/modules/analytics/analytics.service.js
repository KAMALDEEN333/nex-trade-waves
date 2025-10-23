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
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const analytics_entity_1 = require("./entities/analytics.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AnalyticsService = class AnalyticsService {
    constructor(analyticsRepository) {
        this.analyticsRepository = analyticsRepository;
    }
    async trackEvent(userId, eventType, metadata, value) {
        const analytics = this.analyticsRepository.create({
            userId,
            eventType,
            metadata,
            value,
        });
        return this.analyticsRepository.save(analytics);
    }
    async getUserAnalytics(userId, eventType) {
        const query = this.analyticsRepository
            .createQueryBuilder("analytics")
            .where("analytics.userId = :userId", { userId });
        if (eventType) {
            query.andWhere("analytics.eventType = :eventType", { eventType });
        }
        return query.orderBy("analytics.createdAt", "DESC").getMany();
    }
    async getAggregatedStats(userId) {
        const trades = await this.analyticsRepository.count({
            where: { userId, eventType: "trade" },
        });
        const lessonsCompleted = await this.analyticsRepository.count({
            where: { userId, eventType: "lesson_completed" },
        });
        return { trades, lessonsCompleted };
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(analytics_entity_1.Analytics)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map