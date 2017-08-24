import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { ButtonBasic } from './ButtonBasic';

export class ButtonPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><ButtonBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./ButtonBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
