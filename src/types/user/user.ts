export interface User {
    id: string;
}

export interface AuthResponse {
    message: string;
    user_id: string;
}

export type GetOrders = number[];
