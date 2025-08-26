import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import CompletedToDo from "./pages/CompletedToDo";
import IncompleteToDo from "./pages/IncompleteToDo";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            // <ProtectedRoute>
            <Home />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/completedtodo"
          element={
            // <ProtectedRoute>
            <CompletedToDo />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/incompletedtodo"
          element={
            // <ProtectedRoute>
            <IncompleteToDo />
            //</ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

// import { useAuth0 } from "@auth0/auth0-react";

// function ProtectedRoute({ children }) {
//   const hasAccess = localStorage.getItem("access") === "true";

//   if (!hasAccess) {
//     return <Navigate to="/" />;
//   }
//   return children;
// }
// function ProtectedRoute({ children }) {
//   const { isAuthenticated } = useAuth0();

//   if (!isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }
