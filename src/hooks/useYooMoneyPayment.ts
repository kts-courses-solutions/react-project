import { useRootStore } from '@/store/RootStore';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { CreatePaymentResponse } from '@/types/payment';
import {
    YOOMONEY_CONTAINER_NAME,
    YOOMONEY_RETURN_URL,
} from '@/config/yoomoney';

const useYooMoneyPayment = () => {
    const rootStore = useRootStore();

    const [token, setToken] = useState<string | null>(null);

    const checkout = async (price: number, description: string) => {
        rootStore.paymentApiClient
            .post('/create-payment', {
                amount: (price * 100).toString(),
                description: description,
            })
            .then((r: AxiosResponse<CreatePaymentResponse>) =>
                setToken(r.data.confirmation_token),
            );
    };

    useEffect(() => {
        if (token) {
            const checkout = new window.YooMoneyCheckoutWidget({
                confirmation_token: token,
                return_url: YOOMONEY_RETURN_URL,
                error_callback: function (error: Error) {
                    console.log(error);
                },
            });

            checkout.render(YOOMONEY_CONTAINER_NAME);

            return () => {
                checkout.destroy();
            };
        }
    }, [token]);

    return {
        checkout,
    };
};

export default useYooMoneyPayment;
