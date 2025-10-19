import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AddVital from "./pages/AddVital";
import UploadReport from "./pages/UploadReport";
import ViewReport from "./pages/ViewReport"; // ✅ New import
import AIAssistant from './pages/AIAssistant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-vital" element={<AddVital />} />
        <Route path="/upload-report" element={<UploadReport />} />
        <Route path="/view-report" element={<ViewReport />} /> {/* ✅ New route */}
        <Route path="/ai-assistant" element={<AIAssistant />} />
      </Routes>
    </Router>
  );
}

export default App;
