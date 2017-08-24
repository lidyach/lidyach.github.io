import * as React from 'react';

import './TextSeparator.scss';
import { TextSeparatorProps } from './TextSeparatorProps';

export class TextSeparator extends React.Component<TextSeparatorProps, {}> {
    render() {
        return (
            <div className='Text-Separator'>{this.props.text}</div>
        );
    }
}
