import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div className="weather__info">
                {
                    this.props.city && this.props.country && 
                    <p className="weather__key">
                        Location: <span className="weather__value">{this.props.city}, {this.props.country}</span>
                    </p>
                }
                {
                    this.props.temperature && 
                    <p className="weather__key">
                        Temperature: <span className="weather__value">{this.props.temperature}</span>
                    </p>
                }
                {
                    this.props.pressure && 
                    <p className="weather__key">
                        Pressure: <span className="weather__value">{this.props.pressure}</span>
                    </p>
                }
                {
                    this.props.humidity && 
                    <p className="weather__key">
                        Humidity: <span className="weather__value">{this.props.humidity}</span>
                    </p>
                }
                {
                    this.props.windSpeed && 
                    <p className="weather__key">
                        Wind Speed: <span className="weather__value">{this.props.windSpeed}</span>
                    </p>
                }
                {
                    this.props.windDirection && 
                    <p className="weather__key">
                        Wind Direction: <span className="weather__value">{this.props.windDirection}</span>
                    </p>
                }
                {
                    this.props.description && 
                    <p className="weather__key">
                        Conditions: <span className="weather__value">{this.props.description}</span>
                    </p>
                }

                {
                    this.props.error && 
                    <p className="weather__value">
                        {this.props.error}
                    </p>
                }
            </div>
        );
    }
}

export default Weather;
