import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import Icon from './Icon';
import posed from 'react-pose';
import { tween, easing } from 'popmotion';

const navbarProps = {
  open: {
    translateX: '0%',
    delayChildren: 50,
    staggerChildren: 50,
    transition: props =>
      tween({
        ...props,
        duration: 300,
        ease: easing.anticipate,
      }),
  },
  closed: {
    translateX: '-100%',
    delay: 200,
    staggerChildren: 50,
    transition: props =>
      tween({
        ...props,
        duration: 300,
        ease: easing.anticipate,
      }),
  },
};
const menuItemProps = {
  open: {
    translateX: '0%',
  },
  closed: {
    translateX: '-100%',
  },
};
const NavBar = posed.nav(navbarProps);
const MenuItem = posed.li(menuItemProps);

class Header extends Component {
  state = { isOpen: false };

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { profilePicture, name, title, email, social } = this.props;
    const { isOpen } = this.state;

    return (
      <header className="header">
        {/* Menu */}
        <FontAwesome.FaBars
          size="30"
          className="menu__open"
          onClick={this.toggleMenu}
        />
        <NavBar className="menu" pose={isOpen ? 'open' : 'closed'}>
          <FontAwesome.FaClose
            size="35"
            className="menu__close"
            onClick={this.toggleMenu}
          />
          <ul className="menu__list">
            <MenuItem className="menu__item">
              <a role="button">Menu 1</a>
            </MenuItem>
            <MenuItem className="menu__item">
              <a href="#menu-2">Menu 2</a>
            </MenuItem>
            <MenuItem className="menu__item">
              <a href="#menu-3">Menu 3</a>
            </MenuItem>
            <MenuItem className="menu__item">
              <a href="#menu-4">Menu 4</a>
            </MenuItem>
          </ul>
        </NavBar>

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
