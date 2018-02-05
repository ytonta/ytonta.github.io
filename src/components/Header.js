import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header class='header'>
        {/* Menu */}
        <nav class='menu'>
          <ul class='menu__list'>
            <li class='menu__item'>Menu 1</li>
            <li class='menu__item'>Menu 2</li>
            <li class='menu__item'>Menu 3</li>
            <li class='menu__item'>Menu 4</li>
          </ul>
        </nav>

        {/* Header */}
        <div class='profile'>
          <div class='profile__email'>Email</div>
          <div class='profile__picture'>Photo</div>
          <div class='profile__social'>Social</div>
        </div>
      </header>
    );
  }
}

export default Header;
