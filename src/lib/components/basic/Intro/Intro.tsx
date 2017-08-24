import * as React from 'react';

import './Intro.scss';

export interface IntroProps extends React.HTMLProps<HTMLParagraphElement> {
}

export class Intro extends React.Component<IntroProps, {}> {
    render() {
        return (
          <p className='Intro'>
              {this.props.children}
          </p>
        );
    }
}
