import * as React from 'react';

import './NavBottomButton.scss';
import { NavBottomButtonProps } from './NavBottomButtonProps';

import { Button } from 'lib/components/basic/Button';
import { Icon } from 'lib/components/basic/Icon';

export class NavBottomButton extends React.Component<NavBottomButtonProps, {}> {

    render() {
        let { className, ...props } = this.props;
        return (
                <a className='col px-0'>
                    <Button className='Btn-Icon NavBottom-Button py-2 px-0'>
                        <div className={`caption ${props.active ? 'is-active' : ''} ${props.disabled ? 'is-disabled' : ''}`} >
                            <Icon name={props.icon} scale={2}/>
                            <div className='mt-1'>{props.label}</div>
                            {this.props.children}
                        </div>
                    </Button>
                </a>

        );
    }
}
