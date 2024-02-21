export type User = {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    phone: string;
    password: string;
    image_url: string;
};