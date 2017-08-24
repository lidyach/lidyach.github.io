import * as React from 'react';

import './NavBottom.scss';
import { NavBottomProps } from './NavBottomProps';

export class NavBottom extends React.Component<NavBottomProps, {}> {

    render() {
        return (
            <div>
                <div className='NavBottom bg-primary-darker'>
                    <div className='container px-0 d-flex'>
                        {this.props.children}
                    </div>
                </div>
          </div>
        );
    }
}
