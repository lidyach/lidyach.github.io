import * as React from 'react';

export class CodeExample extends React.Component<{}, {}> {
    render() {
        return (
            <div>
              {this.props.children}
            </div>
        );
    }
}
