import { Repository } from "typeorm";
import { Proposal } from "./entities/proposal.entity";
import { Vote } from "./entities/vote.entity";
import { CreateProposalDto } from "./dto/create-proposal.dto";
export declare class GovernanceService {
    private proposalsRepository;
    private votesRepository;
    constructor(proposalsRepository: Repository<Proposal>, votesRepository: Repository<Vote>);
    createProposal(userId: string, createProposalDto: CreateProposalDto): Promise<Proposal>;
    getAllProposals(): Promise<Proposal[]>;
    getProposalById(id: string): Promise<Proposal | null>;
    vote(proposalId: string, userId: string, vote: boolean): Promise<Proposal>;
}
//# sourceMappingURL=governance.service.d.ts.map