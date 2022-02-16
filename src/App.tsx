import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import routes from "./route-config";
import theme from './themes/theme';
import NavigationMenu from './navigation/NavigationMenu';
import drawerWidth from './themes/drawerWidth';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavigationMenu />
        <div style={{ marginLeft: drawerWidth + 50 }}>
          <Switch>
            {routes.map(route =>
              <Route path={route.path} key={route.path} exact={route.exact}>
                <route.component />
              </Route>)}
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
