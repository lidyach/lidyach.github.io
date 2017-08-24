import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { ArtikelBasic } from './ArtikelBasic';

export class ArtikelPage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><ArtikelBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./ArtikelBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
