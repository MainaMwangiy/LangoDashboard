export type User = {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    phone: string;
    password: string;
    image_url: string;
};
export type Vehicle = {
    id: string;
    user_id: string,
    name: string;
    description: string;
    image_url: string;
}