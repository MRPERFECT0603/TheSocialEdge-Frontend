import Leftbar from "./components/leftbar/leftbar";
import Navbar from "./components/navbar/navbar";
import Rightbar from "./components/rightbar/rightbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkmModeContext";
import { AuthContext } from "./context/authContext";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  BrowserRouter,
  Navigate
} from "react-router-dom";


function App() {

  const {currentUser} = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);


  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser)
    {
      return <Navigate to = "/login" />
    }

    return children;
  }  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<ProtectedRoute>
                <Layout />
              </ProtectedRoute>),
      children:[ 
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}




export default App;
