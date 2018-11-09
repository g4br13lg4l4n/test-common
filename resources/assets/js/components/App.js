import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form'
import ListUsers from './ListUsers'
import ListLog from './ListLog'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">PRUEBA BACKEND DEVELOPER</div>
                            <div className="card-body">
                               <Form/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                               <ListUsers/>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                               <ListLog/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
