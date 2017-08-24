import * as React from 'react';

import './Artikel.scss';
import { ArtikelProps } from './ArtikelProps';

export class Artikel extends React.Component<ArtikelProps, {}> {

    render() {
        let { className, ...props } = this.props;

        return (
                <div>
                        <div className='py-1 row'>
                            <div className='col-12'>
                                <ul className='p-0 m-0'>
                                  <div>
                                    <a className='no-hyperlink' href='#'>
                                      <li className='d-flex flex-row car-list-item'>
                                        <div className='col-4 p-1'>
                                          <div className='car-image wide'>
                                            <img src={props.img} />
                                          </div>
                                        </div>
                                        <div className='col p-1 py-1'>
                                          <div className='display-4'>
                                            {props.label}
                                          </div>
                                          <div className='caption text-gray mt-auto pt-1'>{props.date}</div>
                                        </div>
                                      </li>
                                    </a>
                                  </div>
                                </ul>
                            </div>

            </div>
        </div>
        );
    }
}
