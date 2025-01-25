import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./components/Error";
import Latest from "./components/Latest";
import Home from "./components/Home";
import AdPage from "./components/AdPage";
import Rent from "./pages/Rent";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/1",
        element: <Latest />,
      },
      {
        path: "/ads/:adId",
        element: <AdPage />,
      },
      {
        path: "/rent",
        element: <Rent />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
