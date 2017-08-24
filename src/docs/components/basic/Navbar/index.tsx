import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { NavbarBasic } from './NavbarBasic';

export class NavbarPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><NavbarBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./NavbarBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
