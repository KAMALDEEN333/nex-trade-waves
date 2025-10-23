import { Repository } from "typeorm";
import { Analytics } from "./entities/analytics.entity";
export declare class AnalyticsService {
    private analyticsRepository;
    constructor(analyticsRepository: Repository<Analytics>);
    trackEvent(userId: string, eventType: string, metadata?: any, value?: number): Promise<Analytics>;
    getUserAnalytics(userId: string, eventType?: string): Promise<Analytics[]>;
    getAggregatedStats(userId: string): Promise<{
        trades: number;
        lessonsCompleted: number;
    }>;
}
//# sourceMappingURL=analytics.service.d.ts.map