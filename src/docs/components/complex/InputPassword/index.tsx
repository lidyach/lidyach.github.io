import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { InputPasswordBasic } from './InputPasswordBasic';

export class InputPasswordPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><InputPasswordBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./InputPasswordBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
