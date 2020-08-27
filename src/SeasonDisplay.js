import React from 'react';

const SeasonConfig = {
    summer: {
        text: "La oss dra til stranda",
        iconName: 'sun'
    },
    winter: {
        text: "Brr, det er kaldt her",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

// vise hvilken sesong med icon
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName} = SeasonConfig[season];  


    return ( 
    <div>
        <i className={`${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`${iconName} icon`} />
    </div>
    );
};

export default SeasonDisplay;