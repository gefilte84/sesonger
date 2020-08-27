import React from 'react';
import ReactDOM from 'react-dom';

// skaffer posisjonen til bruker. Klasse basert komponent

class App extends React.Component {
    // initierer 'state i app komponent'
    constructor(props) {
        super(props); // må være med når vi definerer en konstruktør innenfor en klasse basert komponent
    
        this.state = { lat: null }; // setter null fordi vi vet ikke posisjon enda
    
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // vi oppdaterer state med setState
                this.setState({ lat: position.coords.latitude});
            },
            err => console.log(err)
        
            );
    }
    // react sier vi MÅ ha en render metode!
    render() {
       
        return <div> Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);