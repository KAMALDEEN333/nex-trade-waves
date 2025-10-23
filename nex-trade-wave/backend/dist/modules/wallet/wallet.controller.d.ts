import { WalletService } from "./wallet.service";
import { CreateWalletDto } from "./dto/create-wallet.dto";
import { Request as ExpressRequest } from "express";
export declare class WalletController {
    private walletService;
    constructor(walletService: WalletService);
    createWallet(createWalletDto: CreateWalletDto, req: ExpressRequest): Promise<import("./entities/wallet.entity").Wallet>;
    getUserWallets(req: ExpressRequest): Promise<import("./entities/wallet.entity").Wallet[]>;
}
//# sourceMappingURL=wallet.controller.d.ts.map