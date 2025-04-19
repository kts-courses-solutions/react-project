declare global {
    interface Window {
        YooMoneyCheckoutWidget: new (options: {
            confirmation_token: string;
            return_url: string;
            error_callback?: (error: Error) => void;
        }) => {
            render: (containerId: string) => void;
            destroy: () => void;
        };
    }
}

export {};
