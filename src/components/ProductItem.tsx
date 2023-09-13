import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductItem({
  product = {
    name: "",
    price: 0,
    src: "",
    id: 0,
  },
  toggleLike = (productId: number): void => {},
  likedProducts = [],
}) {
  console.log();

  return (
    <div
      style={{
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "250px",
        padding: "15px",
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='45' ry='45' stroke='%23333' stroke-width='2' stroke-dasharray='15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
        borderRadius: "45px",
      }}
    >
      <Link to={`/product/${product.id}`}>
        <img
          style={{ height: "232px", width: "232px" }}
          src={`https://testbackend.nc-one.com${product.src}`}
          alt={product.name}
        />
        <Typography
          sx={{
            color: "#414141",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          {product.name}
        </Typography>
      </Link>

      <Box sx={{ display: "flex", height: "25px" }}>
        <Typography
          sx={{
            color: "#414141",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: 500,
            pt: "8px",
          }}
        >
          $ {product.price}
        </Typography>

        <Box
          sx={{
            mt: "3px",
            ml: "100px",
            backgroundColor: "#FFCC26",
            borderRadius: "5px",
            height: "36px",
            width: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {
            toggleLike(product.id);
          }}
        >
          {likedProducts.some((p: any) => p.id === product.id) ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
        </Box>
      </Box>
    </div>
  );
}
