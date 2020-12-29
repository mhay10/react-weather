import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Location } from './Location';
import { Forecast } from './Forecast';

interface WeatherAppState {
    location: string;
    lat: number;
    long: number;
}

export class WeatherApp extends React.Component<{}, WeatherAppState> {
    constructor(props: any) {
        super(props);

        this.state = { location: '' , lat: 0, long: 0 };

        this.locationChanged = this.locationChanged.bind(this);
    }

    locationChanged(location: string) {
        this.setState({ location: location });
    }

    geocode() {
        const params = {
            locate: this.state.location,
            json: 1
        }

        axios.get('https://geocode.xyz', { params }).then((res: AxiosResponse) => {
            this.setState({
                lat: Number(res.data.latt),
                long: Number(res.data.longt)
            });
        });
    }

    gridId() {
        axios.get(`https://api.weather.gov/points/${this.state.lat},${this.state.long}`).then((res: AxiosResponse) => {
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <Location onLocationChange={this.locationChanged} currentLocation={this.state.location}/>
                <p>{this.state.location}</p>
                <Forecast location={this.state.location} lat={this.state.lat.toString()} long={this.state.long.toString()}/>
            </div>
        );
    }
}
