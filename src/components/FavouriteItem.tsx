import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Product {
  name: string;
  price: number;
  src: string;
  id: number;
}

type Props = {
  favouriteItem: Product;
  toggleLike: (productId: number) => void;
  isLiked: (productId: number) => boolean;
};

export default function FavouriteItem({
  favouriteItem,
  toggleLike,
  isLiked,
}: Props) {
  const { name, price, src, id } = favouriteItem;

  return (
    <Box
      key={id}
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
        to={`/product/${id}`}
        style={{
          display: "grid",
          justifyItems: "center",
          textDecoration: "none",
        }}
      >
        <img
          src={`https://testbackend.nc-one.com${src}`}
          alt={name}
          style={{ height: "108px", width: "108px", mixBlendMode: "darken" }}
        />
      </Link>
      <Box style={{ width: "60%" }}>
        <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              color: "#414141",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: 400,
            }}
          >
            {name}
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
            $ {price}
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
            onClick={() => toggleLike(id)}
          >
            {isLiked(id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
