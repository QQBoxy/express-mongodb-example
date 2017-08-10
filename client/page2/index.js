/**************************************************
 File: index.js
 Name: Page 2
 Explain: Admin
****************************************By QQBoxy*/
/*jshint node: true, esversion: 6 */
'use strict';
require("./index.scss");
require("../common/common.js");

import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './components/Admin';

ReactDOM.render(
    <Admin />,
    document.getElementById('app')
);
