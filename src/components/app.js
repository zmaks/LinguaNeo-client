import React, {Component} from 'react';
import Header from './header';
import Main from './main';

export default (props) => {
    return(
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <Header />
                <Main />
            </div>
        </div>
    );
}