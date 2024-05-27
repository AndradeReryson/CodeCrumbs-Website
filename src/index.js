import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Lander from './pages/Lander';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ListaExercicios from './pages/ListaExercicios';
import ListaFlashCards from './pages/ListaFlashCards';
import ListaQuizzes from './pages/ListaQuizzes';
import ErrorPage from './pages/ErrorPage';
import Sair from './pages/Sair';
import AtividadeQuiz from './pages/AtividadeQuiz.js';
import AtividadeExercicio from './pages/AtividadeExercicio.js';
import AtividadeFlashcards from './pages/AtividadeFlashcards.js';
import CriacaoExercicio from './pages/CriacaoExercicio.js';
import CriacaoFlashcard from './pages/CriacaoFlashcard.js';
import CriacaoQuiz from './pages/CriacaoQuiz.js';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Lander />,
    errorElement: <ErrorPage />
  },
  {
    path: "home",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "exercicios",
        element: <ListaExercicios />
      },
      {   
        path: "exercicios/:id",
        element: <AtividadeExercicio />
      },
      {
        path: "exercicios/novo",
        element: <CriacaoExercicio />
      },  
      {
        path: "flashcards",
        element: <ListaFlashCards />
      },
      {
        path: "flashcards/:id",
        element: <AtividadeFlashcards />
      },
      {
        path: "flashcards/novo",
        element: <CriacaoFlashcard />
      },
      {
        path: "quizzes",
        element: <ListaQuizzes />
      },
      {
        path: "quizzes/:id",
        element: <AtividadeQuiz />
      },
      {
        path: "quizzes/novo",
        element: <CriacaoQuiz />
      },
      {
        path: "logout",
        element: <Sair />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
