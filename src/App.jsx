
import Trending from "./component/Trending";
import NotFound from "./component/NotFound";
import TvDetail from "./component/TvDetail";
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
  path :'/detail/:id',
  element:<TvDetail/>,
  errorElement: <Trending/>
}])
  
  return (
   <RouterProvider router={router} />
  )
}

export default App
