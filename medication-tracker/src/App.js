import React from "react";

// Custom components
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Medications } from "./components/Medications";
import { MedicationHistory } from "./components/MedicationHistory";
import { AddMedication } from "./components/AddMedication";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Medications />
        <MedicationHistory />
        <AddMedication />
      </div>
    </GlobalProvider>
  );
}

export default App;
