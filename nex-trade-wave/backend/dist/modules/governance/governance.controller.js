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
exports.GovernanceController = void 0;
const common_1 = require("@nestjs/common");
const governance_service_1 = require("./governance.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_proposal_dto_1 = require("./dto/create-proposal.dto");
const swagger_1 = require("@nestjs/swagger");
let GovernanceController = class GovernanceController {
    constructor(governanceService) {
        this.governanceService = governanceService;
    }
    async createProposal(createProposalDto, req) {
        return this.governanceService.createProposal(req.user.userId, createProposalDto);
    }
    async getAllProposals() {
        return this.governanceService.getAllProposals();
    }
    async getProposal(id) {
        return this.governanceService.getProposalById(id);
    }
    async vote(proposalId, body, req) {
        return this.governanceService.vote(proposalId, req.user.userId, body.vote);
    }
};
exports.GovernanceController = GovernanceController;
__decorate([
    (0, common_1.Post)("proposals"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_proposal_dto_1.CreateProposalDto, Object]),
    __metadata("design:returntype", Promise)
], GovernanceController.prototype, "createProposal", null);
__decorate([
    (0, common_1.Get)("proposals"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GovernanceController.prototype, "getAllProposals", null);
__decorate([
    (0, common_1.Get)("proposals/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GovernanceController.prototype, "getProposal", null);
__decorate([
    (0, common_1.Post)("proposals/:id/vote"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], GovernanceController.prototype, "vote", null);
exports.GovernanceController = GovernanceController = __decorate([
    (0, swagger_1.ApiTags)("governance"),
    (0, common_1.Controller)("governance"),
    __metadata("design:paramtypes", [governance_service_1.GovernanceService])
], GovernanceController);
//# sourceMappingURL=governance.controller.js.map