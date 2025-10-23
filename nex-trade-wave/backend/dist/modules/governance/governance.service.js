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
exports.GovernanceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const proposal_entity_1 = require("./entities/proposal.entity");
const vote_entity_1 = require("./entities/vote.entity");
const typeorm_2 = require("@nestjs/typeorm");
let GovernanceService = class GovernanceService {
    constructor(proposalsRepository, votesRepository) {
        this.proposalsRepository = proposalsRepository;
        this.votesRepository = votesRepository;
    }
    async createProposal(userId, createProposalDto) {
        const proposal = this.proposalsRepository.create({
            ...createProposalDto,
            proposerId: userId,
            votingDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        });
        return this.proposalsRepository.save(proposal);
    }
    async getAllProposals() {
        return this.proposalsRepository.find({ order: { createdAt: "DESC" } });
    }
    async getProposalById(id) {
        return this.proposalsRepository.findOne({ where: { id } });
    }
    async vote(proposalId, userId, vote) {
        const proposal = await this.getProposalById(proposalId);
        if (!proposal) {
            throw new common_1.BadRequestException("Proposal not found");
        }
        const existingVote = await this.votesRepository.findOne({
            where: { proposalId, voterId: userId },
        });
        if (existingVote) {
            throw new common_1.BadRequestException("User has already voted on this proposal");
        }
        const voteRecord = this.votesRepository.create({
            proposalId,
            voterId: userId,
            vote,
        });
        await this.votesRepository.save(voteRecord);
        if (vote) {
            proposal.votesFor++;
        }
        else {
            proposal.votesAgainst++;
        }
        return this.proposalsRepository.save(proposal);
    }
};
exports.GovernanceService = GovernanceService;
exports.GovernanceService = GovernanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(proposal_entity_1.Proposal)),
    __param(1, (0, typeorm_2.InjectRepository)(vote_entity_1.Vote)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], GovernanceService);
//# sourceMappingURL=governance.service.js.map