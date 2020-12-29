import React from 'react';
interface ForecastProps {
    location: string;
    lat: string;
    long: string;
}

export class Forecast extends React.Component<ForecastProps, {}> {
    constructor(props: ForecastProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                        <tr>

                        </tr>
                    </tr>
                </table>
                <p>Lat: {this.props.lat}, Long: {this.props.long}</p>
            </div>
        )
    }
}