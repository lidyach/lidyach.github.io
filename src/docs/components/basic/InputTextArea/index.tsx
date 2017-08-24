import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { InputTextAreaBasic } from './InputTextAreaBasic';

export class InputTextAreaPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><InputTextAreaBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./InputTextAreaBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
