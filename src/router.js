import App from './App';
import SingleUpload from './SingleUpload';

export default [
    {
        path: '/',
        exact: true,
        component: App
    },
    {
        path: '/single/upload',
        component: SingleUpload,
    }
];
