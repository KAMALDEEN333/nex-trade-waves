import { Repository } from "typeorm";
import { ApiKey } from "./entities/api-key.entity";
export declare class ApiKeyService {
    private apiKeysRepository;
    constructor(apiKeysRepository: Repository<ApiKey>);
    createApiKey(userId: string, name: string, scopes: string[], expiresAt?: Date): Promise<ApiKey>;
    getUserApiKeys(userId: string): Promise<ApiKey[]>;
    validateApiKey(key: string): Promise<ApiKey | null>;
    revokeApiKey(keyId: string): Promise<ApiKey | null>;
    rotateApiKey(keyId: string): Promise<ApiKey | null>;
}
//# sourceMappingURL=api-key.service.d.ts.map