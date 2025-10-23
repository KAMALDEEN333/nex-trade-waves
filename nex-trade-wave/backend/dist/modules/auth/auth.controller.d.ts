import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
}
//# sourceMappingURL=auth.controller.d.ts.map