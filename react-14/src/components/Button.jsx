import React from 'react'

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            icon: `fa fa-${this.props.iconName}`
        }
    }

    render(){
        return(
            <button className={this.props.className} onClick={this.props.onClick}>
                {this.props.label}
                <i className={this.state.icon} />
            </button>
        )
    }
}

export default Button