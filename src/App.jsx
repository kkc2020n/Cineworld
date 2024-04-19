
import Trending from "./component/Trending";
import NotFound from "./component/NotFound";
import TvDetail from "./component/TvDetail";
import MovieDetail from "./component/MovieDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
const router = createBrowserRouter([{
  path :'/',
  element:<Trending/>,
  errorElement: <NotFound/>
},
{
  path :'/trending',
  element:<Trending/>
},
{
  path :'/tvdetail/:id',
  element:<TvDetail/>,
  errorElement: <Trending/>
},{
  path :'/mdetail/:id',
  element:<MovieDetail/>,
  errorElement: <Trending/>
}])
  
  return (
   <RouterProvider router={router} />
  )
}

export default App
