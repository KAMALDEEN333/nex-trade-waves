import { Repository } from "typeorm";
import { Wallet } from "./entities/wallet.entity";
export declare class WalletService {
    private walletsRepository;
    constructor(walletsRepository: Repository<Wallet>);
    createWallet(userId: string, address: string, chainId: string): Promise<Wallet>;
    getUserWallets(userId: string): Promise<Wallet[]>;
    getWalletByAddress(address: string): Promise<Wallet | null>;
    updateWalletBalance(walletId: string, balance: number): Promise<Wallet | null>;
}
//# sourceMappingURL=wallet.service.d.ts.map