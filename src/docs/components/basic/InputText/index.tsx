import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { InputTextBasic } from './InputTextBasic';

export class InputTextPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><InputTextBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./InputTextBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
