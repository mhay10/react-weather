import React from 'react';
interface ForecastProps {
    location: string;
    lat: number;
    long: number;
}

export class Forecast extends React.Component<ForecastProps, {}> {
    render() {
        return (
            <div>
                <p>Lat: {this.props.lat}, Long: {this.props.long}</p> 
            </div>
        )
    }
}