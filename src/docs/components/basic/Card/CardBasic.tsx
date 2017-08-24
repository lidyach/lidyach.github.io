import * as React from 'react';

import { Card } from 'lib/components/basic/Card';

export class CardBasic extends React.Component<{}, {}> {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <Card imageSrc='http://dreamatico.com/data_images/car/car-1.jpg' ratio='Square' title='2010 - Car' price='155.000.000' location='Jakarta Selatan' />
                    </div>
                    <div className='col-5'>
                        <Card imageSrc='http://dreamatico.com/data_images/car/car-1.jpg' ratio='Square' title='2010 - Car' price='155.000.000' location='Jakarta Selatan' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5'>
                        <Card imageSrc='http://dreamatico.com/data_images/car/car-1.jpg' ratio='Wide' title='2010 - Car' price='155.000.000' location='Jakarta Selatan' />
                    </div>
                    <div className='col-5'>
                        <Card imageSrc='http://dreamatico.com/data_images/car/car-1.jpg' ratio='Wide' title='2010 - Car' price='155.000.000' location='Jakarta Selatan' />
                    </div>
                </div>
            </div>
        );
    }
}
