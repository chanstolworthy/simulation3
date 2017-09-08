import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

export default (
    <Switch>
        <Route path='/component1' component={Component1}/>
        <Route path='/component2' render ={ () => {
            return (
                <Component2>
                    <Switch>
                        <Route path ='/component2/component3' component={Component3} />
                    </Switch>
                </Component2>
            )
        }} />
    </Switch>
)