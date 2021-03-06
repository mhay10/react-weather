import React from 'react';
import axios from 'axios';
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
        this.forecastUrl = this.forecastUrl.bind(this);
        this.forecastData = this.forecastData.bind(this);
    }

    locationChanged(location: string) {
        this.setState({ location: location });
        setTimeout(() => this.geocode());
    }

    async geocode() {
        const params = { locate: this.state.location, json: 1 };
        const geocodeRes = await axios.get('https://geocode.xyz', { params });

        this.setState({
            lat: geocodeRes.data.latt,
            long: geocodeRes.data.longt
        });

        await this.forecastUrl();
        await this.forecastData();
    }

    async forecastUrl() {
        const gridIdRes = await axios.get(`https://api.weather.gov/points/${this.state.lat},${this.state.long}`);
        
        this.setState({ forecastUrl: gridIdRes.data.properties.forecastHourly });
    }

    async forecastData() {
        const forecastUrlRes = await axios.get(this.state.forecastUrl.toString());
        
        this.setState({ forecastData: forecastUrlRes.data.properties.periods });
    }

    render() {
        return (
            <div>
                <Location onLocationChange={this.locationChanged} currentLocation={this.state.location} />
                <Forecast location={this.state.location} lat={this.state.lat} long={this.state.long} />
                <p>{this.state.forecastUrl}</p>
            </div>
        );
    }
}
