import React from 'react';
import ReactDOM from 'react-dom';

// skaffer posisjonen til bruker. Klasse basert komponent

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    
        );
        return <div> Latitude: </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);