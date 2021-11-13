import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
// import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import MyOrder from '../MyOrders/MyOrder';
import Payment from '../Payment/Payment';
import Reviews from '../../../Home/Reviews/Reviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../../hooks/useAuth';
import AllOrders from '../AllOrders/AllOrders';
import AddProduct from '../AddProduct/AddProduct';
import Products from '../../../Home/Products/Products';
import AddReview from '../AddReview/AddReview';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/"><Button color="inherit">Home</Button></Link> <br />
            {!admin && <Box>
            <Link to={url}><Button color="inherit">My Order</Button></Link> <br />
                <Link to={`${url}/payment`}><Button color="inherit">Paymente</Button></Link> <br />
                <Link to={`${url}/reviews`}><Button color="inherit">Reviews</Button></Link> <br />
            </Box>}
                <Link to={`${url}/addreview`}><Button color="inherit">Add Review</Button></Link> <br />
            {admin && <Box>
                <Link to={`${url}/manageallproducts`}><Button color="inherit">All Cars</Button></Link> <br />
                <Link to={`${url}/allorders`}><Button color="inherit">All Order</Button></Link> <br />
                <Link to={`${url}/addproduct`}><Button color="inherit">Add Car</Button></Link> <br />
                <Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>
            </Box>}
            <Button onClick={logout} style={{ color: "black" }}>Logout</Button>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageallproducts`}>
                        <ManageAllProducts></ManageAllProducts>
                    </Route>
                    <Route path={`${path}/allorders`}>
                        <AllOrders></AllOrders>
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                </Switch>
                    

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;