import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useStoreState, dispatch } from "../store/store";

import "../fonts/fonts.css";
import FavouriteItem from "../components/FavouriteItem";

interface Product {
  name: string;
  price: number;
  src: string;
  id: number;
}

const Liked = () => {
  const likedProducts: [Product] = useStoreState("liked");

  const toggleLike = (productId: number) => {
    const isLiked = likedProducts.some((p: Product) => p.id === productId);

    if (isLiked) {
      dispatch({ type: "delete", productId });
    }
  };

  const isLiked = (productId: number) =>
    likedProducts.some((p: Product) => p.id === productId);

  useEffect(() => {
    console.log("Liked products updated:", likedProducts);
  }, [likedProducts]);

  const items = likedProducts.map((item: Product) => {
    return (
      <FavouriteItem
        favouriteItem={item}
        toggleLike={toggleLike}
        isLiked={isLiked}
      />
    );
  });

  return (
    <div
      style={{
        width: "30%",
        minWidth: "300px",
        height: "800px",
        padding: "5px 15px",
        backgroundColor: "#fff",
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='45' ry='45' stroke='%23333' stroke-width='2' stroke-dasharray='15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
        borderRadius: "45px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Anek Telugu",
          fontWeight: "600",
          color: "#414141",
          mt: "40px",
          ml: "25px",
          fontSize: "24px",
        }}
      >
        FAVORITES
      </Typography>
      <Box sx={{ height: "100%", ml: "15px" }}>
        <Stack spacing={2}>{items}</Stack>
      </Box>
    </div>
  );
};

export default Liked;
