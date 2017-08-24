import * as React from 'react';

export class GridAuto extends React.Component<{}, {}> {

    render() {
        let style: any = {
            border: '1px solid grey',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        };

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col' style={style}>
                        1 of 2
                    </div>
                    <div className='col' style={style}>
                        1 of 2
                    </div>
                </div>
                <div className='row'>
                    <div className='col' style={style}>
                        1 of 3
                    </div>
                    <div className='col' style={style}>
                        1 of 3
                    </div>
                    <div className='col' style={style}>
                        1 of 3
                    </div>
                </div>
            </div>
        );
    }
}
