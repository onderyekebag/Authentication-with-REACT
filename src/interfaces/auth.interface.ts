
export interface LoginInterface {
    username: string,
    password: string,
    rememberMe?: boolean,
}

export interface JWTToken {
    id_token: string;
    refresh_token?: string;
}