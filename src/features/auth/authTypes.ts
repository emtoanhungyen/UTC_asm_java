export interface RegisterRequest {
    username: string;
    password: string;
    email: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: {
        id: number;
        username: string;
        email: string;
    };
}
