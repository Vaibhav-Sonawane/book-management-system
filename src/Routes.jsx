import {createBrowserRouter} from 'react-router-dom';

import App from "./App";
import HomePage from "./pages/HomePage";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<HomePage/>,
            },
            {
                path:"add",
                element:<AddBookPage/>
            },
            {
                path:"edit/:id",
                element: <EditBookPage/>
            }
        ]
    }
]);

export default router;