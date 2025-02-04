import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    backgroundColor: (props) => props.darkMode ? "#333" : "#000",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "14px",
    fontFamily: ["Castoro", "cursive"],
    fontWeight: 400,
    padding: "10px",
    transition: "all 0.3s ease"
  },
  customArrow: {
    color: (props) => props.darkMode ? "#333" : "#000",
    fontSize: 9
  }
}));

export const InfoToolTip = ({ text, component, darkMode }) => {
  const classes = useStyles({ darkMode });
  return (
    <Tooltip
      title={text}
      placement={"top"}
      classes={{
        arrow: classes.customArrow,
        tooltip: classes.customTooltip
      }}
      arrow={true}
    >
      {component}
    </Tooltip>
  );
};