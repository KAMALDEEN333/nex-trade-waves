import { GovernanceService } from "./governance.service";
import { CreateProposalDto } from "./dto/create-proposal.dto";
import { Request as ExpressRequest } from "express";
export declare class GovernanceController {
    private governanceService;
    constructor(governanceService: GovernanceService);
    createProposal(createProposalDto: CreateProposalDto, req: ExpressRequest): Promise<import("./entities/proposal.entity").Proposal>;
    getAllProposals(): Promise<import("./entities/proposal.entity").Proposal[]>;
    getProposal(id: string): Promise<import("./entities/proposal.entity").Proposal | null>;
    vote(proposalId: string, body: {
        vote: boolean;
    }, req: ExpressRequest): Promise<import("./entities/proposal.entity").Proposal>;
}
//# sourceMappingURL=governance.controller.d.ts.map