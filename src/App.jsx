import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import PhonebookView from './views/PhonebookView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>

        <Route path="/" element={<PublicRoute/>}>
           <Route path="/" element={<HomeView/>} />
        </Route>

        <Route path="/register" element={<PublicRoute restricted />}>
           <Route path="/register" element={<RegisterView/>} />
        </Route>

        <Route path="/login" element={<PublicRoute restricted redirectTo='/phonebook' />}>
           <Route path="/login" element={<LoginView/>} />
        </Route>

        <Route path="/phonebook" element={<PrivateRoute redirectTo='/login' />}>
          <Route path="/phonebook" element={<PhonebookView />} />
        </Route>
        
      </Routes>
    </Container>
  );
}


// {/* <Route element={<PrivateRoute path="/contacts" redirectTo="/" />}>
//             <Route path="/contacts" element={<ContactView />} />
//           </Route> */}

export default App;
