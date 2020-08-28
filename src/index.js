import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// skaffer posisjonen til bruker. Klasse basert komponent

class App extends React.Component {
    // initierer 'state i app komponent'
    //constructor(props) {
      //  super(props); // må være med når vi definerer en konstruktør innenfor en klasse basert komponent
        
        // Dette er eneste ganger vi setter attributter til this.state
        //this.state = { lat: null, errorMessage: '' }; // setter null fordi vi vet ikke posisjon enda
    // alternative måte å initiere
    state = { lat: null, errorMessage: ''};
    componentDidMount (){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
                // vi oppdaterer position med setState
            err => this.setState ({ errorMessage: err.message })
                // håndterer error når bruker ikke tillater posisjon
                
            );
        
    }
    
    // Lifecycle metoder
    // dataloading burde alltid gjøres i componentDidMount
    // componentDidUpdate burde alltid brukes til dataloading når en komponent oppdater. 
    // input fra bruker eller knappetrykk
    // componentWillUnmount brukes til å rydde
    
    
    // hjelpe metode for rød border
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />       
        }
        return <Spinner />
    }
    // react sier vi MÅ ha en render metode! Dette er hva bruker ser.
    render() {
      return (
          <div className="border red">
              {this.renderContent()}
          </div>
      );
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);