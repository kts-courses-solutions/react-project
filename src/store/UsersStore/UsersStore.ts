import { RootStore } from '@/store/RootStore';
import { AuthResponse, User } from '@/types/user';
import { DataStore } from '@/store/DataStore';
import { toast } from 'react-toastify';

export default class UsersStore extends DataStore<null | User> {
    private readonly rootStore: RootStore;
    private notifyLogin = () =>
        toast.error('There was a problem in logging...');
    private notifyRegister = () =>
        toast.error('There was a problem in registration...');

    constructor(rootStore: RootStore) {
        super(null);
        this.rootStore = rootStore;
    }

    register(username: string, password: string) {
        this.rootStore.paymentApiClient
            .post<AuthResponse>('/register', {
                username,
                password,
            })
            .then((r) => localStorage.setItem('lalasia_user', r.data.user_id))
            .catch(() => this.notifyLogin());
    }

    authorize(username: string, password: string) {
        this.rootStore.paymentApiClient
            .post<AuthResponse>('/login', {
                username,
                password,
            })
            .then((r) => localStorage.setItem('lalasia_user', r.data.user_id))
            .catch(() => this.notifyRegister());
    }

    load() {
        return localStorage.getItem('lalasia_user');
    }

    destroy() {}
}
