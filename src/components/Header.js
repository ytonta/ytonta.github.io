import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import Icon from './Icon';

class Header extends Component {
  render() {
    const { profilePicture, name, title, email, social } = this.props;

    return (
      <header className="header">
        {/* Menu */}
        <FontAwesome.FaBars size="30" className="menu__toggle" />
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a role="button">Menu 1</a>
            </li>
            <li className="menu__item">
              <a href="#menu-2">Menu 2</a>
            </li>
            <li className="menu__item">
              <a href="#menu-3">Menu 3</a>
            </li>
            <li className="menu__item">
              <a href="#menu-4">Menu 4</a>
            </li>
          </ul>
        </nav>

        {/* Header */}
        <div className="profile">
          <div className="profile__picture">
            <img alt="profile" src={profilePicture} />
          </div>
          <div className="profile__description">
            <h1 className="profile__name">
              {name.first} {name.last}
            </h1>
            <p className="profile__title">{title}</p>
          </div>
          <div className="profile__email">{email}</div>
          <ul className="profile__social">
            {Object.keys(social).map(key => {
              let iconName = social[key].icon;

              return (
                <li key={key}>
                  <a href={social[key].link} target="_blank" rel="noopener">
                    <Icon
                      iconName={iconName}
                      size={25}
                      color={social[key].iconColor}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
