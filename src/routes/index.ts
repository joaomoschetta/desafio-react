import { RouteProps } from 'react-router';

import Home from '../pages/Home';

const appRoutes: RouteProps[] =  [
	{
		render: Home,
		path: '/',
	}
];

export default appRoutes;
