export const YOOMONEY_BACKEND_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://kts-react-project-backend.onrender.com/'
        : 'http://localhost:8000';
export const YOOMONEY_RETURN_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://dmhd6219-additional-projects.github.io/kts-react-project/#/success/'
        : 'http://localhost:5173/#/success';
export const YOOMONEY_CONTAINER_NAME = 'payment-form';
