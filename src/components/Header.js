import React, { Component } from 'react';
import { FaBars } from 'react-icons/lib/fa';

class Header extends Component {
  render() {
    return (
      <header className='header'>

        {/* Menu */}
        <FaBars size='30' />
        <nav className='menu'>
          <ul className='menu__list'>
            <li className='menu__item'>
              <a role='button'>Menu 1</a>
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
          <div className='profile__picture'>
            <img alt='profile' src='http://via.placeholder.com/200x200' />
          </div>
          <div className='profile__description'>
            <h1 className='profile__name'>Yannick Tonta</h1>
            <p className='profile__title'>Front End Developer</p>
          </div>
          <div className='profile__email'>Email</div>
          <div className='profile__social'>Social</div>
        </div>
      </header>
    );
  }
}

export default Header;
