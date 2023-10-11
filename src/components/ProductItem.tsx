import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Popper, Fade } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Product {
  name: string;
  price: number;
  src: string;
  id: number;
}

type Props = {
  product: Product;
  toggleLike: (productId: number) => void;
  likedProducts: Product[];
};

export default function ProductItem({
  product,
  toggleLike = (productId: number): void => {},
  likedProducts = [],
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { name, price, src, id } = product;
  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const getTrueProductName = (name: string) => {
    const wordsArray = name.split(" ");

    if (wordsArray.length > 4) {
      return `${wordsArray.slice(0, 4).join(" ")}...`;
    } else {
      return name;
    }
  };

  const trueProductName = getTrueProductName(name);

  return (
    <div
      id="productIte"
      style={{
        height: "260px",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='%23333' stroke-width='2' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
        borderRadius: "25px",
        backgroundColor: "#fff",
      }}
    >
      <Link
        // TODO
        to={`/product/${id}`}
        style={{
          display: "grid",
          justifyItems: "center",
          textDecoration: "none",
        }}
      >
        <img
          style={{ height: "80%", width: "80%" }}
          src={`https://testbackend.nc-one.com${src}`}
          alt={name}
        />
        <Typography
          sx={{
            color: "#414141",
            fontFamily: "Poppins,sans-seif",
            fontSize: "18px",
            fontWeight: 400,
            maxWidth: "100%",
            maxHeight: "40px",
            textOverflow: "ellipsis",
            width: "100%",
            textDecoration: "none",
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          {trueProductName}
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement="top"
            modifiers={[{ enabled: true }]}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box
                  sx={{
                    border: 1,
                    borderRadius: 2,
                    p: 1,
                    bgcolor: "background.paper",
                  }}
                >
                  {name}
                </Box>
              </Fade>
            )}
          </Popper>
        </Typography>
      </Link>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "20%",
        }}
      >
        <Typography
          sx={{
            color: "#414141",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: 500,
            pt: "8px",
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
          onClick={() => {
            toggleLike(id);
          }}
        >
          {likedProducts.some((p: any) => p.id === id) ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
        </Box>
      </Box>
    </div>
  );
}
