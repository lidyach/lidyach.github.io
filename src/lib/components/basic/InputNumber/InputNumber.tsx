import * as React from 'react';

import './InputNumber.scss';
import { InputNumberProps } from './InputNumberProps';

export class InputNumber extends React.Component<InputNumberProps, {}> {

    render() {
        let className = 'Input-Number mb-4';

        switch (this.props.addOnPosition) {
            case 'front':
                return this.frontAddOnPosition(className);
            case 'back':
            default:
                return this.backAddOnPosition(className);
        }
    }

    frontAddOnPosition(className = '') {
        return (
            <div className={className}>
                <span className='p-2'>{this.props.label}</span>
                <input className='p-2' type='number' min='0' {...this.props} />
            </div>
        );
    }

    backAddOnPosition(className = '') {
        return (
            <div className={className}>
                <input className='p-2' type='number' min='0' {...this.props} />
                <span className='p-2'>{this.props.label}</span>
            </div>
        );
    }
}
