import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/root/Root';
import Home from './pages/home/Home';

// import { getAllRestaurants, getRestaurantById } from './utils/api/restaurant';
// import RestaurantDetail from './pages/restaurantDetail/RestaurantDetail';
// import Profile from './pages/profile/Profile';
// import CategoriesList from './components/categoriesList/CategoriesList';

const router  = createBrowserRouter([
    {
        path : "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
			// {
			// 	path: "/restaurant/:id",
			// 	element: <RestaurantDetail />,
			// 	loader: getRestaurantById
			// },
            // {
            //     path: "/user",
            //     element: <Profile />,
            // }
        ]
    },
    
])

export default router;