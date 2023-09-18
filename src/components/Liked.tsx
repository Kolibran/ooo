import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useStoreState, dispatch } from "../store/store";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "../fonts/fonts.css";
import { Link } from "react-router-dom";

interface Product {
  name: string;
  price: number;
  src: string;
  id: number;
}

const Liked = () => {
  const likedProducts = useStoreState("liked");

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

  const Items = likedProducts.map((item: Product) => {
    return (
      <Box
        key={item.id}
        sx={{
          height: "130px",
          display: "flex",
          justifyContent: "space-around",
          border: "none",
          mixBlendMode: "darken",
          background: "#fbfbfb",
          borderRadius: "25px",
          alignItems: "center",
        }}
      >
        <Link
          to={`/product/${item.id}`}
          style={{
            display: "grid",
            justifyItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={`https://testbackend.nc-one.com${item.src}`}
            alt={item.name}
            style={{ height: "108px", width: "108px", mixBlendMode: "darken" }}
          />
        </Link>
        <Box style={{ width: "60%" }}>
          <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#414141",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              {item.name}
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                color: "#414141",
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1",
              }}
            >
              $ {item.price}
            </Typography>
            <Box
              sx={{
                mt: "3px",
                backgroundColor: "#FFCC26",
                borderRadius: "5px",
                height: "36px",
                width: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => toggleLike(item.id)}
            >
              {isLiked(item.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <div
      style={{
        width: "30%",
        minWidth: "300px",
        height: "800px",
        // marginLeft: "100px",
        // marginTop: "100px",
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
        <Stack spacing={2}>{Items}</Stack>
      </Box>
    </div>
  );
};

export default Liked;
