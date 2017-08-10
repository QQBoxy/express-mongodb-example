/**************************************************
 File: Admin.js
 Name: Admin
 Explain: Admin
****************************************By QQBoxy*/
/*jshint node: true, esversion: 6 */
'use strict';
import React from 'react';

class Admin extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            blogs: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('/api/blog', {
            credentials: 'include',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: e.target.name.value,
                url: e.target.url.value
            })
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        });

    }
    
    render() {
        return (
            /* jshint ignore: start*/
            <div className="container">
                <div className="section">
                    <form onSubmit={this.handleSubmit}>
                        name: <input type="text" name="name" id="name" /><br />
                        url: <input type="text" name="url" id="url" /><br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
            /* jshint ignore: end*/
        );
    }
}

module.exports = Admin;