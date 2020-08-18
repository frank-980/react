import React from 'react';
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  function tryConvert(temperature,convert){
      const input=parseFloat(temperature)
      if(Number.isNaN(input)){
          return '';
      }
      const output=convert(temperature)
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
  }
class BoilingVerdict extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.celsius > 100 || this.props.celsius==='100'){
            return <h2>boil</h2>
        }else{
            return <h2>not boil</h2>
        }  
    } 
} 
const scaleNames={
    c:"Celsius",
    f:"Fahrenheit"
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value)
    }
    render(){
        const temperature = this.props.temperature
        const scale=this.props.scale
        return (
            <div>
                <span>Enter temperature in {scaleNames[scale]}:</span>
                <input value={temperature} onChange={this.handleChange} />
            </div>
        )
    }
}
class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.handleCelsiusChange=this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this)
        this.state={temperature:"",scale:"c"}
    }
    handleCelsiusChange(val){
        this.setState({
            scale:"c",
            temperature:val
        })
    }
    handleFahrenheitChange(val){
        this.setState({
            scale:"f",
            temperature:val
        })
    }
    render(){
        let temperature = this.state.temperature
        let celsius=this.state.scale === 'c' ? temperature : tryConvert(temperature,toCelsius)
        let fahrenheit=this.state.scale === 'f' ? temperature : tryConvert(temperature,toFahrenheit)
        return (
            <div>
                <TemperatureInput 
                 scale="c"
                 temperature={celsius}
                 onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput 
                 scale="f"
                 temperature={fahrenheit}
                 onTemperatureChange={this.handleFahrenheitChange}/>
                 <BoilingVerdict celsius={celsius} />
            </div>
        )
    }
}
export default Calculator