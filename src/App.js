import './App.css';
import SignUpForm from './Components/SignUpForm';
import SignInForm from './Components/SignInForm';
import { Route, Routes } from 'react-router';
import WelcomePage from './Components/WelcomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUpForm />}></Route>
        <Route path='/signin' element={<SignInForm />}></Route>
        <Route path='/Home' element={<WelcomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
