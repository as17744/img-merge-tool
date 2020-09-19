import App from './App';
import SingleUpload from './SingleUpload';
import SingleEdit from './SingleEdit';
import DoubleUpload from './DoubleUpload';
import DoubleEdit from './DoubleEdit';

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
    },
    {
        path: '/double/upload',
        component: DoubleUpload,
    },
    {
        path: '/double/edit',
        component: DoubleEdit,
    }
];
