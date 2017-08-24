import * as React from 'react';

export class GridFixed extends React.Component<{}, {}> {

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
                    <div className='col-6' style={style}>
                        1 of 2
                    </div>
                    <div className='col-6' style={style}>
                        1 of 2
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4' style={style}>
                        1 of 3
                    </div>
                    <div className='col-4' style={style}>
                        1 of 3
                    </div>
                    <div className='col-4' style={style}>
                        1 of 3
                    </div>
                </div>
            </div>
        );
    }
}
