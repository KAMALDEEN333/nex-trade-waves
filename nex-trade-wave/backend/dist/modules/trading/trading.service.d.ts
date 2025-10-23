import { Repository } from "typeorm";
import { Order } from "./entities/order.entity";
import { Portfolio } from "./entities/portfolio.entity";
import { CreateOrderDto } from "./dto/create-order.dto";
export declare class TradingService {
    private ordersRepository;
    private portfolioRepository;
    constructor(ordersRepository: Repository<Order>, portfolioRepository: Repository<Portfolio>);
    createOrder(userId: string, createOrderDto: CreateOrderDto): Promise<Order>;
    getOrders(userId: string, isSimulation?: boolean): Promise<Order[]>;
    getPortfolio(userId: string, isSimulation?: boolean): Promise<Portfolio[]>;
    updateOrderStatus(orderId: string, status: string): Promise<Order | null>;
    getOrderById(orderId: string): Promise<Order | null>;
}
//# sourceMappingURL=trading.service.d.ts.map