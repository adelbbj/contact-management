import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/home-page";
import { ContactDetailsPage } from "./pages/contact-details-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact/:id" element={<ContactDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
