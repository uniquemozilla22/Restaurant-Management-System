

export interface UserType {
        name: string;
        username: string;
        password: string;
        contact?: {
            email: string;
            phone?: number;
        } ;
}