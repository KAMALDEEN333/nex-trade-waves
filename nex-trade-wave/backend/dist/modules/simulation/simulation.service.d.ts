import { Repository } from "typeorm";
import { SimulationLesson } from "./entities/simulation-lesson.entity";
import { UserProgress } from "./entities/user-progress.entity";
export declare class SimulationService {
    private lessonsRepository;
    private progressRepository;
    constructor(lessonsRepository: Repository<SimulationLesson>, progressRepository: Repository<UserProgress>);
    getAllLessons(): Promise<SimulationLesson[]>;
    getLessonById(id: string): Promise<SimulationLesson | null>;
    getUserProgress(userId: string): Promise<UserProgress[]>;
    markLessonComplete(userId: string, lessonId: string, score: number): Promise<UserProgress>;
}
//# sourceMappingURL=simulation.service.d.ts.map