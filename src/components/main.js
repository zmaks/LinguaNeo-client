import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Dictionary from './tabs/dictionary';
import Translator from './tabs/translator';
import Training from './tabs/training';
import Statistics from './tabs/statistics';


export default (props) => {
    return(
        <div>
            <Switch>
                <Route path='/dictionary' component={Dictionary}/>
                <Route path='/translator' component={Translator}/>
                <Route path='/training' component={Training}/>
                <Route path='/statistics' component={Statistics}/>
            </Switch>
        </div>
    );
}
