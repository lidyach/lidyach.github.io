import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { IntroBasic } from './IntroBasic';

export class IntroPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><IntroBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./IntroBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
