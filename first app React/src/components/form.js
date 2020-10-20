import React from 'react';

class Form extends React.Component {
    render () {
        return(
            <div>
               <form onSubmit={this.props.weatherMethod}>
                   <input tyoe="text" name="city" placeholder="Ввeдіть місто"/>
                   <button >Переглянути погоду</button>
               </form>

            </div>
        )
    }
}

export default Form;