import { Box, Grid } from "@mui/material";
import { dispatch, useStoreState } from "../store/store";
import ProductItem from "../components/ProductItem";

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
    <Box sx={{ width: "50%" }}>
      <Grid container item spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
          <Grid item>
            <ProductItem
              product={product}
              likedProducts={likedProducts}
              toggleLike={toggleLike}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
