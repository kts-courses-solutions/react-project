import { createRoot } from 'react-dom/client';
import '@/config/mobX';
import App from './App';

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    //
    // </StrictMode>,
    <App />,
);
