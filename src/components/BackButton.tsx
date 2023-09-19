import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ArrowBackIcon
      onClick={goBack}
      sx={{
        color: "#414141",
        fontSize: "32px",
        mt: "30px",
        mr: "15px",
      }}
    />
  );
}

export default BackButton;
