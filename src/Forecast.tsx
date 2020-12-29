import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { reduceEachTrailingCommentRange } from 'typescript';

interface ForecastProps {
    location: string;
    lat: string;
    long: string;
}


export class Forecast extends React.Component<ForecastProps> {
    constructor(props: ForecastProps) {
        super(props);

        this.state = {
            lat: 0,
            long: 0
        }

        this.geocode = this.geocode.bind(this);
        this.gridId = this.geocode.bind(this);
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