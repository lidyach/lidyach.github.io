import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { NavBottomBasic } from './NavBottomBasic';

export class NavBottomPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><NavBottomBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./NavBottomBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
