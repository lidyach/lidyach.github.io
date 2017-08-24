import * as React from 'react';

import './InputText.scss';
import { InputTextProps } from './InputTextProps';

export class InputText extends React.Component<InputTextProps, {}> {

    render() {
        return (
            <input type='text' {...this.props} className='InputText' />
        );
    }
}
