import IRoute from "../interfaces/routes";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";

const authRoutes: IRoute[] = [
    {
        path: '/login',
        exact: true,
        auth: false,
        component: LoginPage,
        name: 'Login'
    }
];

const mainRoutes: IRoute[] = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: HomePage,
        name: 'Home'
    }
];

const routes: IRoute[] = [
    ...authRoutes,
    ...mainRoutes
]

export default routes;
