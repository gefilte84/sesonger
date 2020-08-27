import React from 'react';
import ReactDOM from 'react-dom';

// skaffer posisjonen til bruker. Klasse basert komponent

class App extends React.Component {
    // initierer 'state i app komponent'
    constructor(props) {
        super(props); // må være med når vi definerer en konstruktør innenfor en klasse basert komponent
        
        // Dette er eneste ganger vi setter attributter til this.state
        this.state = { lat: null, errorMessage: '' }; // setter null fordi vi vet ikke posisjon enda
    
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // vi oppdaterer position med setState
                this.setState({ lat: position.coords.latitude});
            },
            err => {
                // håndterer error når bruker ikke tillater posisjon
                this.setState ({ errorMessage: err.message })
            }
        
            );
    }

    
    // react sier vi MÅ ha en render metode!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }
        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);