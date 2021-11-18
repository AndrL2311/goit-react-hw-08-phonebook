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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/register" element={<RegisterView/>} />
        <Route path="/login" element={<LoginView/>} />
        <Route path="/phonebook" element={<PhonebookView/>} />
      </Routes>
    </Container>
  );
}

export default App;
