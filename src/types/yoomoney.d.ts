declare global {
    interface Window {
        YooMoneyCheckoutWidget: new (options: {
            confirmation_token: string;
            return_url: string;
            error_callback?: (error: Error) => void;
        }) => {
            render: (containerId: string) => void;
            on: (
                event: 'complete' | 'success' | 'fail',
                callback: () => void,
            ) => void;
            destroy: () => void;
        };
    }
}

export {};
