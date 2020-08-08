import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss';

const Header = ({ currentUser }) => {
	const handleSignOut = () => {
		auth.signOut()
	}
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
			</Link>
				<Link className="option" to="/shop">
					CONTACT
			</Link>

				{/* if user is signed in display SIGN OUT, otherwise give the other option */}
				{currentUser
					? <Link onClick={handleSignOut} to='/'>SIGN OUT</Link>
					: <div>
						<Link className="option" to="/signin">
							SIGN IN
					</Link>
						<Link className="option" to="/signup">
							SIGN UP
					</Link>
					</div>
				}
			</div>
		</div>
	)
};

export default Header
