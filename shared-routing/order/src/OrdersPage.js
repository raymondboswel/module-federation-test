import {
  Container,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from '@material-ui/core';
import React from 'react';
import { orders } from './data';
import { useServiceContext } from 'shell/Service';
import OrderService from './OrderService';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/orders',
      element: <OrderService />,
    },
    {
      path: '/orders/1',
      element: <div>single order</div>,
    },
  ],
  { baseName: '/orders' },
);

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
}));

export default function OrderPage() {
  const classes = useStyles();
  const serviceContext = useServiceContext();
  React.useEffect(() => {
    serviceContext.setService({ title: 'Orders' });
  }, []);
  return (
    <div>
      <h1> ROUUUUUUTEEEER</h1>
      <RouterProvider router={router} />
    </div>
  );
}
