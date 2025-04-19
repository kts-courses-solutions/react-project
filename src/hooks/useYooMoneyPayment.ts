import { useRootStore } from '@/store/RootStore';
import { RefObject, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { CreatePaymentResponse } from '@/types/payment';
import {
    YOOMONEY_CONTAINER_NAME,
    YOOMONEY_RETURN_URL,
} from '@/config/yoomoney';
import { toast } from 'react-toastify';

const useYooMoneyPayment = (
    paymentFormRef: RefObject<HTMLDivElement | null>,
) => {
    const rootStore = useRootStore();
    const notify = () =>
        toast.error(
            'There was a problem in communication with the payment backend...',
        );

    const [token, setToken] = useState<string | null>(null);
    const [initialLoading, setInitialLoading] = useState<boolean | null>(null);

    const checkout = async (price: number, description: string) => {
        setInitialLoading(true);
        rootStore.paymentApiClient
            .post('/create-payment', {
                amount: (price * 100).toString(),
                description: description,
            })
            .then((r: AxiosResponse<CreatePaymentResponse>) => {
                setToken(r.data.confirmation_token);
                setInitialLoading(false);
            })
            .catch(() => {
                notify();
            });
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

            const refCurrent = paymentFormRef?.current;
            if (refCurrent) {
                checkout.render(YOOMONEY_CONTAINER_NAME);
            }

            return () => {
                if (refCurrent) {
                    checkout.destroy();
                }
            };
        }
    }, [token]);

    return {
        checkout,
        initialLoading,
    };
};

export default useYooMoneyPayment;
