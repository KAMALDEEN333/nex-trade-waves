import { ApiKeyService } from "./api-key.service";
import { CreateApiKeyDto } from "./dto/create-api-key.dto";
import { Request as ExpressRequest } from "express";
export declare class ApiKeyController {
    private apiKeyService;
    constructor(apiKeyService: ApiKeyService);
    createApiKey(createApiKeyDto: CreateApiKeyDto, req: ExpressRequest): Promise<import("./entities/api-key.entity").ApiKey>;
    getUserApiKeys(req: ExpressRequest): Promise<import("./entities/api-key.entity").ApiKey[]>;
    revokeApiKey(id: string): Promise<import("./entities/api-key.entity").ApiKey | null>;
    rotateApiKey(id: string): Promise<import("./entities/api-key.entity").ApiKey | null>;
}
//# sourceMappingURL=api-key.controller.d.ts.map