import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import PhonebookView from './views/PhonebookView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { Spinner } from "react-bootstrap";
import s from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  // console.log('isFetchingCurrentUser',isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    
    <Container>
      {isFetchingCurrentUser ? (
      <Spinner className={s.spiner} animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
      </Spinner>
      ) : (
      <>
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
      </>)}
    </Container>
  );
}

export default App;
