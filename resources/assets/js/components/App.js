import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form'


export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">PRUEBA BACKEND DEVELOPER</div>
                            <div className="card-body">
                               <Form></Form>
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
