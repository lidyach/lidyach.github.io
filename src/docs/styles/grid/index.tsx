import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { GridAuto } from './GridAuto';
import { GridFixed } from './GridFixed';

export class GridPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><GridAuto /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./GridAuto')}</CodeSource>
                </Code>

                <Code>
                    <CodeExample><GridFixed /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./GridFixed')}</CodeSource>
                </Code>
            </div>
        );
    }
}
