import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { InputNumberBasic } from './InputNumberBasic';

export class InputNumberPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><InputNumberBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./InputNumberBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
