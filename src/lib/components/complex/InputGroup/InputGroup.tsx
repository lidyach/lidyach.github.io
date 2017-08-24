import * as React from 'react';

import { Icon } from '../../basic/Icon';
import './InputGroup.scss';
import { InputGroupProps } from './InputGroupProps';

export class InputGroup extends React.Component<InputGroupProps, {}> {

    render() {
        let className = 'Input-Group mt-3';
        switch (this.props.type) {
            case 'Number':
                return this.renderNumberInputGroup(className);
            case 'Basic':
            default:
                return this.renderBasicInputGroup(className);
        }
    }

    renderNumberInputGroup(className = '') {
        return (
            <div className={className}>
                <label>
                    <span className='Number-Input-Group-Icon'>
                        {this.props.index}{' '}<Icon name='arrow-right' scale={0.7} />{' '}
                    </span>
                    <span className='Number-Input-Group-Label'>{this.props.label}</span>
                </label>
                <div>{this.props.children}</div>
            </div>
        );
    }

    renderBasicInputGroup(className = '') {
        return (
            <div className={className}>
                <label className='Basic-Input-Group-Label'>{this.props.label}</label>
                <div>{this.props.children}</div>
            </div>
        );
    }
}
