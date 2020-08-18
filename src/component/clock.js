import React from 'react';
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:1
        } 
    }
    trick(){
        this.setState(function(state,props) {
            return {date:state.date+1}
        })
    }
    componentDidMount(){
        this.timer = setInterval(()=>this.trick(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render (){
        return(
            <div>
                <h1>{this.state.date}</h1>
            </div>
        ) 
    }  
}
export default Clock;