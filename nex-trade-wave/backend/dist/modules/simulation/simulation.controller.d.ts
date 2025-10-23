import { SimulationService } from "./simulation.service";
import { Request as ExpressRequest } from "express";
export declare class SimulationController {
    private simulationService;
    constructor(simulationService: SimulationService);
    getAllLessons(): Promise<import("./entities/simulation-lesson.entity").SimulationLesson[]>;
    getLesson(id: string): Promise<import("./entities/simulation-lesson.entity").SimulationLesson | null>;
    getUserProgress(req: ExpressRequest): Promise<import("./entities/user-progress.entity").UserProgress[]>;
    markLessonComplete(req: ExpressRequest, lessonId: string, body: {
        score: number;
    }): Promise<import("./entities/user-progress.entity").UserProgress>;
}
//# sourceMappingURL=simulation.controller.d.ts.map