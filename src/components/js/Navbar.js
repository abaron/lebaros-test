import React 	from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

// Top navbar
const Navbar = () => {
    return (

        <div class="top-navbar">
			<div class="top-navbar-left">
				<a href="#" id="menu-left" data-activates="slide-out-left">
					<i class="fa fa-bars"></i>
				</a>
			</div>
			<div class="top-navbar-right">
				<a href="#">
					<i class="fa fa-search"></i>
				</a>
				<a href="#" class="dropdown-button" data-activates="dropdown1">
					<i class="fa fa-user-circle-o"></i>
				</a>
                <ul id="dropdown1" class="dropdown-content">
					<li><a href="javascript:void(0);"><i class="fa fa-user"></i> Profil Saya</a></li>
					<li><a href="javascript:void(0);"><i class="fa fa-server"></i> Daftar Belanja</a></li>
					<li><a href="javascript:void(0);"><i class="fa fa-list-alt"></i> Wishlist</a></li>
					<li class="divider"></li>
					<li><a href="javascript:void(0);"><i class="fa fa-sign-out"></i> Logout</a></li>
				</ul>

				<a href="#" id="menu-right" data-activates="slide-out-right">
					<span class="cart-badge">2</span>
					<i class="fa fa-shopping-cart"></i>
				</a>
			</div>
			<div class="site-title">
				<h1>ECOMMERCE</h1>
			</div>
		</div>

    )
}

export default Navbar
