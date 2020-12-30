import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Reclutador from './components/reclutador/Reclutador';
import TalentoState from './context/talentos/talentosState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  return (
      <TalentoState>
        <AlertaState>
          <AuthState>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/reclutador" component={Reclutador} />
                </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TalentoState> 
  );
}

export default App;
