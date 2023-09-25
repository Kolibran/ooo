import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Favourites from "./containers/Favourites";
import ProductList from "./containers/ProductList";
import ProductDetails from "./components/ProductDetails";
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
            <Favourites />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetails />}></Route>
            </Routes>
          </div>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
