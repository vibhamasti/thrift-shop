import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/"> Thrift Shop</Link>
      {' '}{new Date().getFullYear()}{'.'}
    </Typography>
  );
}

export default Copyright;