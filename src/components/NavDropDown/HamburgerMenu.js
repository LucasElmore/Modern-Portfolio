import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { DiCssdeck } from 'react-icons/di';
import Link from 'next/link';
import { Span } from '../Header/HeaderStyles';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#767a8a',
    transition: '0.4s ease',
    borderRadius:  '100px'
  },
  bmBurgerBarsHover: {
    background: '#FFF',
    transition: '0.4s ease'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    top: 0,
    height: '100%'
  },
  bmMenu: {
    background: '#181f36',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    '& nav a:hover': {
      color:'#fff'
    },
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    margin: '9rem 0',
    color: '#aaa',
    transition: '0.4s ease',
    '&:hover': {
      color:'#fff'
    },
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0)',
    position: 'fixed',
    left: 0
  },
}

const changeColor = (e) => (
  e.target.style.transition = '0.4s ease',
  e.target.style.color = "#fff"
)
const changeBack = (e) => (
  e.target.style.transition = '0.4s ease',
  e.target.style.color = "#aaa"
)

class HamburgerMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  render() {
    return (
      <Menu isOpen={this.state.menuOpen}  onStateChange={(state) => this.handleStateChange(state)} 
      right styles={ styles }>
        <Link href="/">
          <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
              <DiCssdeck size="3rem"/> <Span>Lucas Elmore</Span>
          </a>
        </Link>
        <a id="Projects" onClick={() => this.closeMenu()} onMouseOver={changeColor} onMouseLeave={changeBack} className={styles.bmItem} href="#projects">Projects</a>
        <a id="Technologies" onClick={() => this.closeMenu()} onMouseOver={changeColor} onMouseLeave={changeBack} className={styles.bmItem} href="#tech">Technologies</a>
        <a id="About" onClick={() => this.closeMenu()} onMouseOver={changeColor} onMouseLeave={changeBack} className={styles.bmItem} href="#about">About</a>
        <a id="Contact" onClick={() => this.closeMenu()} onMouseOver={changeColor} onMouseLeave={changeBack} className={styles.bmItem} href="#contact">Contact</a>
      </Menu>
    )
  }
}

export default HamburgerMenu;