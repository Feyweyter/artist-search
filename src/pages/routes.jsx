import React, {
    Suspense,
    lazy,
} from 'react';
import {hot} from 'react-hot-loader/root';
import {useDispatch, useSelector} from 'react-redux';
import {
    Route,
    Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage';
import InfoPage from './InfoPage';


const routes = [
    {
        path: '/',
        render: () => <SearchPage/>,
        exact: true,
    },
    {
        path: '/:name',
        render: () => <InfoPage/>,
        exact: true,
    },
];

const RouteMap = () => {
    return (
        <Switch>
            {routes.map((item) => <Route {...item} key={item.path}/>)}
        </Switch>
    );
};

export default hot(RouteMap);
