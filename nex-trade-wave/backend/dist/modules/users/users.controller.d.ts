import { UsersService } from "./users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUser(id: string): Promise<import("./entities/user.entity").User | null>;
    updateUser(id: string, updateData: any): Promise<import("./entities/user.entity").User | null>;
    getAllUsers(): Promise<import("./entities/user.entity").User[]>;
}
//# sourceMappingURL=users.controller.d.ts.map