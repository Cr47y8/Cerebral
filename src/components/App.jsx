'use strict';

import React from 'react';
import {Route} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {lightBlue200} from 'material-ui/styles/colors';

import LeftNav from './nav/LeftNav';
import Overview from './views/Overview';
import SkillBrowser from './views/SkillBrowser';
import SpFarming from './views/SpFarming';
import Contracts from './views/Contracts';
import Character from './views/Character';
import Settings from './views/Settings';


const muiTheme = getMuiTheme(darkBaseTheme, {
    palette: {
        accent1Color: lightBlue200,
    },
});

const styles = {
    mainDiv: {
        margin: '0 0 0 270px',
        padding: '0 0 0 0',
    }
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <LeftNav/>

                    <div style={styles.mainDiv}>
                        <Route exact path="/" component={Overview} />
                        <Route path="/sp-farming" component={SpFarming} />
                        <Route path="/skill-browser" component={SkillBrowser} />
                        <Route path="/contracts" component={Contracts} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/characters/:characterId" component={Character} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
