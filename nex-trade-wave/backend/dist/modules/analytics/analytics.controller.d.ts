import { AnalyticsService } from "./analytics.service";
import { Request as ExpressRequest } from "express";
export declare class AnalyticsController {
    private analyticsService;
    constructor(analyticsService: AnalyticsService);
    getStats(req: ExpressRequest): Promise<{
        trades: number;
        lessonsCompleted: number;
    }>;
    getUserAnalytics(req: ExpressRequest): Promise<import("./entities/analytics.entity").Analytics[]>;
}
//# sourceMappingURL=analytics.controller.d.ts.map