import * as React from 'react';
import { PrismCode } from 'react-prism';

export class CodeSource extends React.Component<{ type: 'jsx' }, {}> {
    render() {
        let { children, type } = this.props;
        return (
            <pre>
              <PrismCode className={`language-${type}`}>{children}</PrismCode>
            </pre>
        );
    }
}
