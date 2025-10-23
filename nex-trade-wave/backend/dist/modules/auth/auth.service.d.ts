import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        user: import("../users/entities/user.entity").User[];
        token: {
            access_token: string;
            expires_in: number;
        };
    }>;
    login(loginDto: LoginDto): Promise<{
        user: import("../users/entities/user.entity").User;
        token: {
            access_token: string;
            expires_in: number;
        };
    }>;
    validateUser(email: string, password: string): Promise<import("../users/entities/user.entity").User | null>;
    private generateToken;
}
//# sourceMappingURL=auth.service.d.ts.map