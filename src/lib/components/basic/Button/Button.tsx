import * as React from 'react';

import './Button.scss';
import { ButtonProps } from './ButtonProps';
export class Button extends React.Component<ButtonProps, {}> {
    render() {
        let { className, ...props } = this.props;

        return (
            <button
                {...props}
                className={`btn ${props.size || ''} ${props.color || ''} ${props.block ? 'block' : ''} ${className}`}
            >
                {this.props.children}
            </button>);
    }
}
