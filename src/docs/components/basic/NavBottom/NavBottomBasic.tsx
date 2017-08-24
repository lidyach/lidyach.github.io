import * as React from 'react';

import { NavBottom } from 'lib/components/basic/NavBottom';
import { NavBottomButton } from 'lib/components/basic/NavBottom/NavBottomButton';

export class NavBottomBasic extends React.Component<{}, {}> {
    render() {
        return (
                <NavBottom>
                    <NavBottomButton  icon='home' label='Beranda' linkTo='/home' active={true}/>
                    <NavBottomButton  icon='park' label='Parkiran' linkTo='/parkiran' disabled={true}/>
                    <NavBottomButton  icon='plus-circle' label='Jual' linkTo='/jual'/>
                    <NavBottomButton  icon='bell' label='Notifikasi' linkTo='/notifikasi'/>
                    <NavBottomButton  icon='user' label='Akun' linkTo='/user'/>
                </NavBottom>
        );
    }
}
