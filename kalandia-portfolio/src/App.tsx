import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4">
        <Link to="/" className="text-white hover:text-gray-200 mx-4">
          Home
        </Link>
      </nav>
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to React Router 7!
        </h1>
      </div>
    </div>
  );
}
export default App;
