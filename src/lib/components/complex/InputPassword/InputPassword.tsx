import * as React from 'react';

import { Icon } from '../../basic/Icon/Icon';
import './InputPassword.scss';
import { InputPasswordProps } from './InputPasswordProps';

interface InputPasswordState {
    hidden: boolean;
}

export class InputPassword extends React.Component<InputPasswordProps, InputPasswordState> {
    constructor() {
        super();
        this.state = { hidden: true };
        this.showHide = this.showHide.bind(this);
    }

    showHide() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    render() {
        return (
            <div className='Input-Password'>
                <input type={this.state.hidden ? 'password' : 'text'} name={this.props.name} {...this.props} className='Input-Password-Field' />
                <div className='Input-Password-Icon' onClick={this.showHide}>
                    <Icon name='eye' scale={1.3} />
                </div>
            </div>
        );
    }
}
