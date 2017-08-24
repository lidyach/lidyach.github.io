import * as React from 'react';

import './InputTextArea.scss';
import { InputTextAreaProps } from './InputTextAreaProps';

export class InputTextArea extends React.Component<InputTextAreaProps, {}> {
    render() {
        let { ...props } = this.props;

        return (
            <div>
                <textarea {...props} className={`Input-TextArea p-2 ${props.name} ${props.maxLength} ${props.rows} ${props.placeholder}`} />
                <div className='text-muted text-right'>
                    <small>Maksimum <span className='Max-Char'>{props.maxLength}</span> karakter</small>
                </div>
            </div>
        );
    }
}
