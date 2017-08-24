import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { InputGroupBasic } from './InputGroupBasic';

export class InputGroupPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><InputGroupBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./InputGroupBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
