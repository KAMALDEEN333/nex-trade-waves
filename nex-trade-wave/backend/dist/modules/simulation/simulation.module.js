"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const simulation_service_1 = require("./simulation.service");
const simulation_controller_1 = require("./simulation.controller");
const simulation_lesson_entity_1 = require("./entities/simulation-lesson.entity");
const user_progress_entity_1 = require("./entities/user-progress.entity");
let SimulationModule = class SimulationModule {
};
exports.SimulationModule = SimulationModule;
exports.SimulationModule = SimulationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([simulation_lesson_entity_1.SimulationLesson, user_progress_entity_1.UserProgress])],
        controllers: [simulation_controller_1.SimulationController],
        providers: [simulation_service_1.SimulationService],
        exports: [simulation_service_1.SimulationService],
    })
], SimulationModule);
//# sourceMappingURL=simulation.module.js.map