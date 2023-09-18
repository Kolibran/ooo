import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Liked from "./components/Liked";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import { dataOperation } from "./dataOperation/dataOperation";
import { dispatch } from "./store/store";

const App = () => {
  useEffect(() => {
    const dispatchCallback = (data: any) => dispatch({ type: "setData", data });

    dataOperation(dispatchCallback);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Box>
          <Navbar />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "100px",
              backgroundColor: "#fbfbfb",
            }}
          >
            <Liked />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<Product />}></Route>
            </Routes>
          </div>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
