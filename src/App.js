import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Words from './pages/Words';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Lesson from './pages/Lesson';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import CreateLesson from './components/CreateLesson/CreateLesson';
import './App.css';

function App() {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("Account");
  Window.userId = userId;
  Window.userName = "Account";

  const handleSignIn = (id, name) => {
    setUserId(id);
    setUserName(name);

  };

  useEffect(() => {
    console.log('User ID in Parent Component:', userId);
  }, [userId]);


    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    };
  return (
    <BrowserRouter basename="/EnglishApp-UI">
      <header>
        <Link to="/home" class ="Title">VideoEnglish</Link>
        <nav>
          <Link to="/home">Home</Link>
          {Window.userId === null ? (
            <Link to="/signIn">Dictionary</Link>
          ) : (
            <Link to="/words">Dictionary</Link>
          )}
        </nav>
        {
          userName === 'Account' ? (
            <Link to="/signIn" id='AccountIcon'  >Account</Link>
          ) :(
            <span id='UserIcon'   onClick={toggleDropdown} >{userName}</span>
          )
        }



        {isOpen  && (
        <ul className ='DropDownProfile'>
          <Link to="/signIn" id='SignInLink' onClick={toggleDropdown} >Another Account</Link>
        </ul>
      )}

      </header> 
      <main>
        <Routes>
          <Route index element={<Home userId={userId} />} />
          <Route path="/home" element={<Home userId={userId} />} />
          <Route path="/words" element={<Words userId={userId} />} />
          <Route path="/lesson/:lessonId" element={<Lesson />} />
          <Route path="/createLesson/:lessonId" element={<CreateLesson />} />
          <Route path="/signIn" element={<SignIn onSignIn={handleSignIn} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
