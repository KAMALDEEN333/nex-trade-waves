import { TradingService } from "./trading.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { Request as ExpressRequest } from "express";
export declare class TradingController {
    private tradingService;
    constructor(tradingService: TradingService);
    createOrder(createOrderDto: CreateOrderDto, req: ExpressRequest): Promise<import("./entities/order.entity").Order>;
    getOrders(req: ExpressRequest): Promise<import("./entities/order.entity").Order[]>;
    getPortfolio(req: ExpressRequest): Promise<import("./entities/portfolio.entity").Portfolio[]>;
    getOrder(id: string): Promise<import("./entities/order.entity").Order | null>;
}
//# sourceMappingURL=trading.controller.d.ts.map