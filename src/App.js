import Home from './pages/Home';
import DefaultLayout from './layouts/Default';
import Contact from './pages/Contact';
import NasaImages from  './pages/NasaImages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routes = [{
    path: '/gallery',
    main: () => <DefaultLayout>
      <NasaImages></NasaImages>
    </DefaultLayout>
  },
  {
    path: '/',
    exact: true,
    main: () => <DefaultLayout>
      {/* <Movies></Movies> */}
    </DefaultLayout>
  },
  {
    path: '/movie/:id',
    main: () => <DefaultLayout>
      {/* <MovieDetails></MovieDetails> */}
    </DefaultLayout>
  },
  {
    path: '/contact',
    main: () => <DefaultLayout>
      <Contact></Contact>
    </DefaultLayout>
  },
  {
    path: '/example',
    main: () => <DefaultLayout>
      <Home></Home>
    </DefaultLayout>
  },  
]

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
      key={index}
      exact={route.exact}
      path={route.path}
    >
      {route.main}
    </Route>
  })
  return routeComponents
}


function App() {
  return (
    <Router>
        <Switch>
          {getRoutes()}
        </Switch>
    </Router>
  );
}

export default App;
