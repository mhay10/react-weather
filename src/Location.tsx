import React from "react";
import axios, { AxiosResponse } from 'axios';

interface GetLocationState {
    location: string;
    submit: boolean;
}

interface LocationProps {
    onLocationChange: (location: string) => void;
    currentLocation: string;
}

export class GetLocation extends React.Component<LocationProps, GetLocationState> {
    constructor(props: LocationProps) {
        super(props);
        this.state = { location: '', submit: false };
        this.updateLocation = this.updateLocation.bind(this);
        this.submitLocation = this.submitLocation.bind(this);
    }

    updateLocation(e: any) {
        this.setState({ location: e.target.value})
    }

    submitLocation() {
        if (this.state.location.length <= 1) {
            this.setState({ location: 'Please enter a location' });
            this.setState({ submit: false });
        } else {
            this.props.onLocationChange(this.state.location);
            this.setState({ submit: true });
        }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateLocation} />
                <button type="submit" onClick={this.submitLocation}>Submit Location</button>
                <p>{this.state.location}</p>
            </div>
        );
    }
}

interface GetGeoLocationState {
    location: string;
    lat: ;
    long: number;
}

export class GetGeoLocation extends React.Component<{}, GetGeoLocationState> {
    constructor(props: any) {
        super(props);
        this.state = { location: '' };
        this.locationChanged = this.locationChanged.bind(this);
        this.getLatLong = this.getLatLong.bind(this);
    }

    locationChanged(location: string) {
        this.setState({ location: location });
        setTimeout(() => this.getLatLong());
    }

    getLatLong() {
        const params =  {
            locate: this.state.location,
            json: 1
        }

        axios.get('https://geocode.xyz', { params }).then((res: AxiosResponse) => {
            this.setState({
                lat: res.data.latt,
                long: res.data.longt
            })
        })


    }

    render() {
        return (
            <div>
                <GetLocation onLocationChange={this.locationChanged} currentLocation={this.state.location} />
            </div>
        )
    }
}
