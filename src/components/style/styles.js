import { makeStyles } from '@material-ui/core/styles';


//I use the material-ui to make a chart not to optimize the UI
export default makeStyles(() => ({
  income: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  expense: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
}));
