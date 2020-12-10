import React from 'react';

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid
} from '@material-ui/core';

import useStyles from './styles';
//import {address} from './AddressForm';

// TODO: Replace with state - cart items

var  cartstring = localStorage.getItem('cart');
if(!cartstring) {
  cartstring = '[]';
}
const products = JSON.parse(cartstring);

/* const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99', qty: '1'},
  { name: 'Product 2', desc: 'Another thing', price: '$3.45', qty: '2'},
  { name: 'Product 3', desc: 'Something else', price: '$6.51', qty: '3'},
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11', qty: '4'},
]; */

//const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
var addresses = [];
var addresslist = [];
if(sessionStorage.getItem('address')) {
  addresses = JSON.parse(sessionStorage.getItem('address'));
  for (var i in addresses) {
    if(i === 'lastname' || i === 'firstname') {
      continue;
    }
    addresslist.push(addresses[i]);
  }
}

var paymentdets = [];
if (sessionStorage.getItem('payments')) {
  paymentdets = JSON.parse(sessionStorage.getItem('payments'));
}

var payments = [];
if(paymentdets.number) {
 payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: paymentdets.holder },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-' + paymentdets.number.substr(12) },
  { name: 'Expiry date', detail: paymentdets.expiry },
];
}

// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];


export default function Review() {
  const classes = useStyles();

  const getTotal = (products) => {
    let total = 0;
    products.forEach(product => {
      total += parseFloat(product.price) * parseInt(product.quantity);
    });
    return total;
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {/* <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Typography variant="body2">{'₹' + product.price}</Typography>
            <Typography variant="body2">{product.quantity}</Typography>
          </ListItem>
        ))} */}
         {/* <Grid conatiner justify="space-between" alignItems="center"> */}
            <List disablePadding>
             {products.map((product) => (
            <ListItem className={classes.listItem} key={product.name}>
                 <Grid item xs={8}>
                  <ListItemText primary={product.name} secondary={product.description} />
                </Grid>
                 
                 <Grid item xs={2}>
                  <Typography variant="body2">{product.price}</Typography>
                </Grid>

                <Grid item xs>
                  <Typography variant="body2">{product.quantity}</Typography> 
                </Grid>
                 
                <Grid item xs>
                    <Typography variant="body2">{parseFloat(product.quantity) * parseFloat(product.price)}</Typography> 
                </Grid>
            </ListItem>
          ))}
          </List>
        {/* </Grid> */}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>  
            {'₹' + getTotal(products)}
          </Typography>
        </ListItem>

      {/* </List> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{addresses.firstname} {addresses.lastname}</Typography>
          <Typography gutterBottom>{addresslist.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}