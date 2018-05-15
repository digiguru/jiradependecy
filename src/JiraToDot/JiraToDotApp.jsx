import React, { Component } from 'react';
import {example} from './example';
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
        this.setState({login: login}, () => {
            this.loadData();
        });
        
    }
    loadData () {

        const config = {
            ...this.state.login,
            protocol: 'https',
            host: "immediateco.atlassian.net",
            apiVersion: '2',
            strictSSL: true
        };
        
        let jira = new JiraApi(config);
        jira.searchJira("project = WED and Sprint in openSprints() and type in standardIssueTypes()")
            .then(issue => {
                console.log(`Status: ${issue.fields.status.name}`, issue);
                this.setState({graph: toDotMultiple(parseMultipleBlockers(issue))});
            })
            .catch(err => {
                console.error(err);
            });
        
        
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

