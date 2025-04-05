import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/config/mobX';
import App from '@/App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
