import React from 'react'
import Button from './Button'

class ButtonFilter extends React.Component{
    handleSelected() {
        return `filters__item ${this.props.isSelected ? "is-selected" : ""}`;
    }

    render(){
        return(
            <Button
                className={this.handleSelected()}
                label={this.props.label}
                iconName='sort-down'
                onClick={this.props.onClick}
            >
            </Button>
        )
    }
}

export default ButtonFilter