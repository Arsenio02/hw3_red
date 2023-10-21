import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserForm from './UserForm';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <UserForm />
            </div>
        </Provider>
    );
}

export default App;
