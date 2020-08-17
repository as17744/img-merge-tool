import App from './App';
import SingleUpload from './SingleUpload';
import SingleEdit from './SingleEdit';

export default [
    {
        path: '/',
        exact: true,
        component: App
    },
    {
        path: '/single/upload',
        component: SingleUpload,
    },
    {
        path: '/single/edit',
        component: SingleEdit,
    }
];
