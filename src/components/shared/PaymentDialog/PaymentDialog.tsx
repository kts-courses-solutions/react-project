import { useEffect, useState } from 'react';
import { YOOMONEY_CONTAINER_NAME } from '@/config/yoomoney.ts';
import useYooMoneyPayment from '@/hooks/useYooMoneyPayment.ts';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Loader } from '@/components/ui/Loader';

interface PaymentDialogProps {
    price: number;
    description: string;
}

const PaymentDialog = ({ price, description }: PaymentDialogProps) => {
    const { checkout, initialLoading } = useYooMoneyPayment();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            checkout(price, description);
        }
    }, [price, description, open]);

    return (
        <>
            <Button
                onClick={(e) => {
                    setOpen(true);
                    e.preventDefault();
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
                {initialLoading && <Loader />}
                <div
                    id={YOOMONEY_CONTAINER_NAME}
                    style={{ width: '100%', height: '100%' }}
                />
            </Modal>
        </>
    );
};

export default PaymentDialog;
