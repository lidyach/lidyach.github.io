import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { InputHiddenBasic } from './InputHiddenBasic';

export class InputHiddenPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><InputHiddenBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./InputHiddenBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
