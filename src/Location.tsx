import React from "react";

interface GetLocationState {
    location: string;
    submit: boolean;
}

export class GetLocation extends React.Component<{}, GetLocationState> {
    constructor(props: any) {
        super(props);
        this.state = { location: '', submit: false };
        this.updateLocation = this.updateLocation.bind(this);
        this.submitLocation = this.submitLocation.bind(this);
    }

    updateLocation(e: any) {
        this.setState({ location: e.target.value})
    }

    submitLocation() {
        if (this.state.location) {
            
        }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateLocation} />
                <button type="submit" onClick={this.submitLocation}>Submit Location</button>
                <p>{this.state.submit}</p>
            </div>
        );
    }
}
