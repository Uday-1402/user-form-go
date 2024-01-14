import "./App.css";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Form from "./Form/Form";
import FormSubmitted from "./Form/FormSubmitted";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/form-submitted" element={<FormSubmitted />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
