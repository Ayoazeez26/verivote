import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./ui/AppLayout";
import ProposalsPage from "./pages/ProposalsPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import ProposalDetailsPage from "./pages/ProposalDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="proposals" />} />
          <Route path="proposals" element={<ProposalsPage />} />
          <Route path="proposals/:id" element={<ProposalDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
