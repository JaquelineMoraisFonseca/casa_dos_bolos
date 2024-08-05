import { styled } from "@mui/system";
import PropTypes from "prop-types";

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
  marginRight: "70px",
  whiteSpace: "nowrap", 
  '&:hover': {
    backgroundColor: "#7a4247",
  },
  [theme.breakpoints.up("xs")]: {
    padding:"10px 50px",
  },
}));

const StyledButton = ({ children, onClick }) => (
  <Button onClick={onClick}>
    {children}
  </Button>
);

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default StyledButton;
