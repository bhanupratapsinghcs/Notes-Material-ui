import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notes from './Pages/Notes'
import Create from './Pages/Create'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Notes /></Route>
        <Route path='/create'><Create /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
