import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { CardBasic } from './CardBasic';

export class CardPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><CardBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./CardBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
