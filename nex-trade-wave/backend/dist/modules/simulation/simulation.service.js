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
exports.SimulationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const simulation_lesson_entity_1 = require("./entities/simulation-lesson.entity");
const user_progress_entity_1 = require("./entities/user-progress.entity");
const typeorm_2 = require("@nestjs/typeorm");
let SimulationService = class SimulationService {
    constructor(lessonsRepository, progressRepository) {
        this.lessonsRepository = lessonsRepository;
        this.progressRepository = progressRepository;
    }
    async getAllLessons() {
        return this.lessonsRepository.find({ order: { order: "ASC" } });
    }
    async getLessonById(id) {
        return this.lessonsRepository.findOne({ where: { id } });
    }
    async getUserProgress(userId) {
        return this.progressRepository.find({ where: { userId } });
    }
    async markLessonComplete(userId, lessonId, score) {
        const progress = await this.progressRepository.findOne({
            where: { userId, lessonId },
        });
        if (progress) {
            progress.completed = true;
            progress.score = score;
            progress.completedAt = new Date();
            return this.progressRepository.save(progress);
        }
        const newProgress = this.progressRepository.create({
            userId,
            lessonId,
            completed: true,
            score,
            completedAt: new Date(),
        });
        return this.progressRepository.save(newProgress);
    }
};
exports.SimulationService = SimulationService;
exports.SimulationService = SimulationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(simulation_lesson_entity_1.SimulationLesson)),
    __param(1, (0, typeorm_2.InjectRepository)(user_progress_entity_1.UserProgress)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], SimulationService);
//# sourceMappingURL=simulation.service.js.map