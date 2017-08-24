import * as React from 'react';

import './Navbar.scss';
import { NavbarProps } from './NavbarProps';

import { Button } from 'lib/components/basic/Button';
import { Icon } from 'lib/components/basic/Icon';

export class Navbar extends React.Component<NavbarProps, {}> {

    constructor() {
        super();
        this.state = { display : 'none' };
        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    onClick() {
        this.setState({
            display : 'block'
        });
    }

    onClose() {
        this.setState({
            display : 'none'
        });
    }

    render() {

        return (
        <div>
          <div className='bg-gray-base Navbar-backdrop' style={this.state} />
            <div className='Navbar-sidebar Navbar-bar-block Navbar-card-2' style={this.state} >
                <div className='px-3 py-2 bg-primary-darker d-flex align-items-center'>
                    <span className='mr-3'>
                        <Button className='Navbar-Button-Icon' href='#'  onClick={this.onClose} >
                            <div className='caption p-3'>
                                <Icon name='user' scale={3} />
                            </div>
                        </Button>
                    </span>
                    <span>
                        <span className='text-white '>
                            <a className='text-white no-hyperlink' href='#'>Masuk </a>
                             /
                            <a className='text-white no-hyperlink' href='#'> Daftar</a>
                        </span>
                    </span>
                </div>
                <div className='p-1 bg-gray-lighter' />
                    <div className='px-3 py-2'>
                        <Button onClick={this.onClose} className='Navbar-bar-item Navbar-list Navbar-large' >Close &times;</Button>
                            <a href='#' className='Navbar-bar-item Navbar-list'>Link 1</a>
                            <a href='#' className='Navbar-bar-item Navbar-list'>Link 2</a>
                            <a href='#' className='Navbar-bar-item Navbar-list'>Link 3</a>
                </div>
            </div>
        <div>
          <nav className='Navbar-teal Navbar-shadow' onClick={this.onClick}>
              <Button className='Navbar-left Navbar-button' >
                <div className='caption'>
                      <Icon name='bars' scale={2} />
                </div>
              </Button>
              <div className='Navbar-container'>
                <img src='/logo-white.png' alt='Garasi.id' />
              </div>
          </nav>
          </div>
          </div>
        );
    }
}
