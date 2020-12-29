import React from 'react';

interface LocationProps {
    onLocationChange: (location: string) => void;
    currentLocation: string;
}

interface LocationState {
    location: string
}

export class Location extends React.Component<LocationProps, LocationState> {
    constructor(props: LocationProps) {
        super(props);

        this.state = { location: '' };

        this.getLocation = this.getLocation.bind(this);
        this.submitLocation = this.submitLocation.bind(this);
    }

    getLocation(e: any) {
        this.setState({ location: e.target.value });
    }

    submitLocation() {
        if (this.state.location.length <= 1) {
            this.setState({ location: 'Please enter a location' });
        } else {
            this.props.onLocationChange(this.state.location);
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="City Name" onChange={this.getLocation}/>
                <button type="submit" onClick={this.submitLocation}>Submit Location</button>
                <p>{this.state.location}</p>
            </div>
        );
    }
}
