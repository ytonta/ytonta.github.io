import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        {/* Menu */}
        <nav className='menu'>
          <ul className='menu__list'>
            <li className='menu__item'>
              <a href='#menu-1'>Menu 1</a>
            </li>
            <li className='menu__item'>
              <a href='#menu-2'>Menu 2</a>
            </li>
            <li className='menu__item'>
              <a href='#menu-3'>Menu 3</a>
            </li>
            <li className='menu__item'>
              <a href='#menu-4'>Menu 4</a>
            </li>
          </ul>
        </nav>

        {/* Header */}
        <div className='profile'>
          <div className='profile__email'>Email</div>
          <div className='profile__picture'>
            <img alt='profile' src='http://via.placeholder.com/300x300' />
          </div>
          <div className='profile__social'>Social</div>
        </div>
      </header>
    );
  }
}

export default Header;
