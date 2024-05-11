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
        path: "flashcards",
        element: <ListaFlashCards />
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
