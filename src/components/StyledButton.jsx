import { styled } from "@mui/system";
import PropTypes from "prop-types";

const StyledButton = ({ children }) => {
  const Button = styled("button")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "10px 15px",
    width: "35%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight:"70px",
    '&:hover': {
      backgroundColor: "#7a4247",
    }
  }));

  return (
    <Button>
      {children}
    </Button>
  );
};

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledButton;
