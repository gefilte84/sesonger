import React from 'react';
import ReactDOM from 'react-dom';

// skaffer posisjonen til bruker. Klasse basert komponent

class App extends React.Component {
    // initierer 'state'
    constructor(props) {
        super(props); // må være med når vi definerer en konstruktør innenfor en klasse basert komponent
    
        this.state = { lat: null }; // setter null fordi vi vet ikke posisjon enda
    }
    // react sier vi MÅ ha en render metode!
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