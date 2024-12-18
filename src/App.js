import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import ContentPage from "./pages/ContentPage";
import data from "./data/hisNotes.json";

function App() {
  const [page, openPage] = useState("ContentPage");
  return (
    <div className="App">
      <Header></Header>
      {page}
    </div>
  );
}

export default App;
