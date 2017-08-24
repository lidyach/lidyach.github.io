import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { TextSeparatorBasic } from './TextSeparatorBasic';

export class TextSeparatorPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><TextSeparatorBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./TextSeparatorBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
