import React, { Component } from 'react';
import {example} from './unitExample';
import {parseMultipleBlockers} from './parse';
import {toDotMultiple} from './toDot';
import Dot from './Dot';
import Login from './Login';
import JiraApi from 'jira-client';
export default class JiraToDotApp extends Component {

    constructor(props, context) {
        super(props, context);
    
        //this.state = {date: new Date('2018-02-27T12:03:42.000Z')};
        this.handleLogin = this.handleLogin.bind(this);
        this.loadData = this.loadData.bind(this);
        this.state = {
            login:{},graph:{}
        };
        
    };
    handleLogin (login) {

        console.log("handleLogin", login);
        this.setState({login: login});
        this.loadData();
    }
    loadData () {
        const config = {
            ...this.state.login,
            protocol: 'https',
            host: "tech.immediate.co.uk",
            apiVersion: '2',
            strictSSL: false
        }
        console.log("REG", config);
        let jira = new JiraApi(config);
        
        jira.findIssue("WED-5318")
            .then(issue => {
                console.log(`Status: ${issue.fields.status.name}`);
            })
            .catch(err => {
                console.error(err);
            });
        this.setState({graph: toDotMultiple(parseMultipleBlockers(example))});
        
    }
    render() {

        return (
            <div>
                <Login handleLogin={this.handleLogin} />
                <Dot graph={this.state.graph} />
            </div>
        );
    }
}

