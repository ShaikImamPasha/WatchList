import { Provider} from 'react-redux';
import './App.css';
import { Header,Body, MainContainer, WatchList } from './componentes';
import store from './utils/store';
import { Outlet, createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Outlet></Outlet>
    </Provider>
  );
}
const ConficRoute=createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children:[
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "/watch",
          element: <WatchList />
        }
        ]
      }
    ]
  }
])

export default ConficRoute;
