import * as React from 'react';
import { InputHiddenProps } from './InputHiddenProps';

export class InputHidden extends React.Component<InputHiddenProps, {}> {
    render() {
        return <input type='hidden' {...this.props} />;
    }
}
