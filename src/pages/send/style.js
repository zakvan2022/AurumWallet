import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding:theme.spacing(2),
    flex:1,
    display: 'flex',
    flexDirection: 'column'
  },
  header:{
    marginTop:20,
  },
  bottomSpace: {
    marginBottom: theme.spacing(2)
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formrow: {
    marginBottom: theme.spacing(2),
    "& input": {
      padding: "12px 10px",
      color: "white",
      border: "1px solid #9c9c9c",
      marginBottom: 10,
      marginTop: 15,
      background: "transparent",
      "&::placeholder": {
        color: "#9c9c9c",
      },
      "&:focus": {
        border: "1px solid #9c9c9c",
      },
      "&::before":{
        display:'none',
      }
    },
  },
  submitWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
  },
  divslider: {
    background: 'red',
    "&>.WithStyles(ForwardRef(Slider))-root-65": {
      "&>.MuiSlider-rail": {
        background: 'black'
      },
      "&>.MuiSlider-track": {
        background: '#333333'
      },
      "&>.MuiSlider-thumb": {
        background: 'white',
        width: '30px',
        height: '15px',
        borderRadius: '15px'
      },
    }
  }
}));

export default useStyles;
