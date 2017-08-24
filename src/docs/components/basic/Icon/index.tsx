import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { IconBasic } from './IconBasic';

export class IconPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><IconBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./IconBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
