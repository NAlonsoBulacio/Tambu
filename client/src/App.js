import './App.css';
import Landing from './Views/Landing';
import UserTable from './Views/UserTable/UserTable';
import FormCerco from './Views/FormCerco/FormCerco';
import DashboardAdmin from './Views/DashboardAdmin/DashboardAdmin';
import Filters from './Views/Products/Filters';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Route exact path="/" component={Landing} />
       <Route path="/users" component={UserTable} />
       <Route path="/formcerco" component={FormCerco} />
       <Route path="/dashboardadmin" component={DashboardAdmin} />
       <Route path="/products" component={Filters} />
    </div>
  );
}

export default App;
