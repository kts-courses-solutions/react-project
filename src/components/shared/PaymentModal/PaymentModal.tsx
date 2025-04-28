import { useRef, useState } from 'react';
import { YOOMONEY_CONTAINER_NAME } from '@/config/yoomoney';
import useYooMoneyPayment from '@/hooks/useYooMoneyPayment';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Loader } from '@/components/ui/Loader';
import s from './PaymentModal.module.scss';

interface PaymentDialogProps {
    price: number;
    description: string;
}

const PaymentModal = ({ price, description }: PaymentDialogProps) => {
    const paymentFormRef = useRef<HTMLDivElement>(null);

    const { checkout, initialLoading } = useYooMoneyPayment(paymentFormRef);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={(e) => {
                    setOpen(true);
                    e.preventDefault();
                    checkout(price, description);
                }}
            >
                Buy now
            </Button>
            <Modal
                isOpen={open}
                onClose={(e) => {
                    setOpen(false);
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                {initialLoading && (
                    <div className={s.paymentModal__loader}>
                        <Loader />
                        {process.env.NODE_ENV === 'production' && (
                            <span>
                                Please, wait a bit... I am using free hosting
                                for backend and it may be VERY slow.. If there
                                is no error, then it is still loading.
                            </span>
                        )}
                    </div>
                )}
                <div id={YOOMONEY_CONTAINER_NAME} ref={paymentFormRef} />
            </Modal>
        </>
    );
};

export default PaymentModal;
