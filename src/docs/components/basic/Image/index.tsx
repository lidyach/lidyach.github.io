import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Code, CodeExample, CodeSource } from 'docs/utils/Code';

import { ImageBasic } from './ImageBasic';

export class ImagePage extends React.Component<RouteComponentProps<any>, {}> {
    render() {
        return (
            <div>
                <Code>
                    <CodeExample><ImageBasic /></CodeExample>
                    <CodeSource type='jsx'>{require('!!raw-loader!./ImageBasic')}</CodeSource>
                </Code>
            </div>
        );
    }
}
