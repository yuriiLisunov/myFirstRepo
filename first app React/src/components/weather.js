import React from 'react';

class Weather extends React.Component {
    render () {
        return(
            <div className="infoWeath">
                {this.props.city && <div>
                   <p>Місто, країна: {this.props.city}, {this.props.country}</p>
                   <p>Температура, (F): {this.props.temp}</p>
                   <p>Атмосферний тиск. мм.р.ст.: {this.props.pressure}</p>
                   <p>Вітер, м/с: {this.props.wind}</p></div>
                }
            <p className="error">{this.props.error}</p>
            </div>
        )
    }
}

export default Weather;