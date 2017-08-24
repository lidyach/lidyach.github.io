import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { InputSelectDropdownBasic } from './InputSelectDropdownBasic';

export class InputSelectDropdownPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><InputSelectDropdownBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./InputSelectDropdownBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
