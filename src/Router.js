import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import InfoPage from './components/pages/InfoPage'
import OperationsPage from './components/pages/OperationsPage'
import DataPage from './components/pages/DataPage'
import ContactPage from './components/pages/ContactPage'
import QuotesPage from './components/pages/QuotesPage'


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/info' component={InfoPage} />
            <Route path='/operations' component={OperationsPage} />
            <Route path='/data' component={DataPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/quotes' component={QuotesPage} />
            <Route component={InfoPage} />
        </Switch>
    </BrowserRouter>
)

export default Router;