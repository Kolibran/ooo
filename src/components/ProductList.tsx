import { useEffect, useState } from "react";
import { Box, Card, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { dispatch, useStoreState } from "../store/store";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ProductItem from "./ProductItem";

interface Product {
  name: string;
  price: number;
  src: string;
  id: number;
}

function ProductList() {
  const likedProducts = useStoreState("liked");

  const products: [Product] = useStoreState("data");

  const toggleLike = (productId: number) => {
    const isLiked = likedProducts.some((p: any) => p.id === productId);

    if (isLiked) {
      dispatch({ type: "delete", productId });
    } else {
      const productToAdd = products.find((product) => product.id === productId);
      if (productToAdd) {
        dispatch({ type: "add", product: productToAdd });
      }
    }
  };

  return (
    <Box sx={{ width: "100%", ml: "150px", mt: "100px" }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductItem
            product={product}
            likedProducts={likedProducts}
            toggleLike={toggleLike}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
