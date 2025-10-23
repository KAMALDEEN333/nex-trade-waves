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
exports.TradingController = void 0;
const common_1 = require("@nestjs/common");
const trading_service_1 = require("./trading.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_order_dto_1 = require("./dto/create-order.dto");
const swagger_1 = require("@nestjs/swagger");
let TradingController = class TradingController {
    constructor(tradingService) {
        this.tradingService = tradingService;
    }
    async createOrder(createOrderDto, req) {
        return this.tradingService.createOrder(req.user.userId, createOrderDto);
    }
    async getOrders(req) {
        return this.tradingService.getOrders(req.user.userId);
    }
    async getPortfolio(req) {
        return this.tradingService.getPortfolio(req.user.userId);
    }
    async getOrder(id) {
        return this.tradingService.getOrderById(id);
    }
};
exports.TradingController = TradingController;
__decorate([
    (0, common_1.Post)("orders"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto, Object]),
    __metadata("design:returntype", Promise)
], TradingController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Get)("orders"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TradingController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Get)("portfolio"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TradingController.prototype, "getPortfolio", null);
__decorate([
    (0, common_1.Get)("orders/:id"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TradingController.prototype, "getOrder", null);
exports.TradingController = TradingController = __decorate([
    (0, swagger_1.ApiTags)("trading"),
    (0, common_1.Controller)("trading"),
    __metadata("design:paramtypes", [trading_service_1.TradingService])
], TradingController);
//# sourceMappingURL=trading.controller.js.map