"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import PeopleForm from './components/PeopleForm.jsx'

ReactDOM.render(<List />, document.getElementById('ingredients'));
ReactDOM.render(<PeopleForm />, document.getElementById('field'));
