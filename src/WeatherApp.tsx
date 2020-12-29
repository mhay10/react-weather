import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Location } from './Location';
import { Forecast } from './Forecast';

interface WeatherAppState {
    location: string;
    lat: number;
    long: number;

    forecastUrl: string;
    forecastData: string;
}

export class WeatherApp extends React.Component<{}, WeatherAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            location: '',
            lat: 0,
            long: 0,

            forecastUrl: '',
            forecastData: ''
        };

        this.locationChanged = this.locationChanged.bind(this);
        this.geocode = this.geocode.bind(this);
    }

    locationChanged(location: string) {
        this.setState({ location: location });

        setTimeout(() => this.geocode());
    }

    geocode() {
        const params = {
            locate: this.state.location,
            json: 1
        }

        axios.get('https://geocode.xyz', { params }).then((res: AxiosResponse) => {
            this.setState({
                lat: res.data.latt,
                long: res.data.longt
            });

            axios.get(`https://api.weather.gov/points/${this.state.lat},${this.state.long}`).then((res: AxiosResponse) => {
                this.setState({ forecastUrl: res.data.properties.forecast });
            })
        });
    }

    forecast() {

    }

    render() {
        return (
            <div>
                <Location onLocationChange={this.locationChanged} currentLocation={this.state.location} />
                <Forecast location={this.state.location} lat={this.state.lat} long={this.state.long} />
            </div>
        );
    }
}
