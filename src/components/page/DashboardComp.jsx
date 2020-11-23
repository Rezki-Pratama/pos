import React, {Fragment, useContext} from 'react'
import Navbar from '../tamplate/Navbar'
import Sidebar from '../tamplate/Sidebar'
import { AuthContext } from '../../App'
import { BrowserRouter, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product/Product'
import MenuComp from './MenuComp'
import AddProduct from './Product/AddProduct'
import EditProduct from './Product/EditProduct'

function DashboardComp() {

    let { path, url } = useRouteMatch();

    const {state} = useContext(AuthContext);

    if(!state.isAuthenticated) {
        return <Redirect to="/" />
    }

    return(
        <Fragment>

            <Navbar/>

            <div className="bg-teal-300 h-full font-sans leading-normal tracking-normal bg-bg mb-5 md:mb-0">


            <div className="flex md:flex-row-reverse flex-wrap">

            <div className="w-full md:w-4/5 lg:w-5/6 bg-teal-300">
                <div className="container bg-teal-300 pt-16 px-6 lg:px-0">

                <Switch>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route path="/dashboard/product" component={Product}/>
                    <Route path="/dashboard/add_product" component={AddProduct}/>
                    <Route path="/dashboard/edit_product" component={EditProduct}/>
                </Switch>

                </div>
            </div>

            <Sidebar/>

            </div>
            </div>
        </Fragment>
    );
}

export default DashboardComp;