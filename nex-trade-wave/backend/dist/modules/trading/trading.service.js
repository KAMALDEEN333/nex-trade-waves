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
exports.TradingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const portfolio_entity_1 = require("./entities/portfolio.entity");
const typeorm_2 = require("@nestjs/typeorm");
let TradingService = class TradingService {
    constructor(ordersRepository, portfolioRepository) {
        this.ordersRepository = ordersRepository;
        this.portfolioRepository = portfolioRepository;
    }
    async createOrder(userId, createOrderDto) {
        const total = createOrderDto.quantity * createOrderDto.price;
        const order = this.ordersRepository.create({
            userId,
            ...createOrderDto,
            total,
            status: "pending",
        });
        return this.ordersRepository.save(order);
    }
    async getOrders(userId, isSimulation = false) {
        return this.ordersRepository.find({
            where: { userId, isSimulation },
            order: { createdAt: "DESC" },
        });
    }
    async getPortfolio(userId, isSimulation = false) {
        return this.portfolioRepository.find({
            where: { userId, isSimulation },
        });
    }
    async updateOrderStatus(orderId, status) {
        await this.ordersRepository.update(orderId, { status });
        return this.ordersRepository.findOne({ where: { id: orderId } });
    }
    async getOrderById(orderId) {
        return this.ordersRepository.findOne({ where: { id: orderId } });
    }
};
exports.TradingService = TradingService;
exports.TradingService = TradingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_2.InjectRepository)(portfolio_entity_1.Portfolio)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], TradingService);
//# sourceMappingURL=trading.service.js.map