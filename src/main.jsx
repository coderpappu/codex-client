import ReactDOM from 'react-dom/client';
import './index.css';
// import { RouterProvider } from "react-router";
import Routers from './Routes/Routers.jsx';
import 'aos/dist/aos.css';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router}></RouterProvider>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routers />);
