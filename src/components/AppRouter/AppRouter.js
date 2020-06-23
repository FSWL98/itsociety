import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { CasesContainer } from '../CasesContainer/CasesContainer';
import { TeamsList } from '../TeamsList/TeamsList';

export const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/cases/:id' component={ CasesContainer }/>
            <Route path='/cases/:id/teams' component={ TeamsList } />
            <Redirect from='/' to='/cases/1' />
        </Switch>
    </BrowserRouter>
);