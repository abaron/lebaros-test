import React    from 'react'
import { Link } from 'react-router-dom'
import '../css/Menu.css'

// Toogle left menu
const Menu = () => {
    return (

        <div id="slide-out-left" class="side-nav">
            <div class="top-left-nav">
                <div class="pic-thumb">
                    <img src="images/profile-image-1.png" alt="" />
                </div>

                <a href="#" style={{lineHeight: 5 + "px", marginLeft: -15 + "px"}}>
                    John Wick
                </a>
            </div>

            <div id="main-menu">
                <ul>
                    <li><Link to="/"><i class="fa fa-home"></i> Home</Link></li>
                    <li class="has-sub"><a href="#"><i class="fa fa-th-list"></i> Kategori</a>
                        <ul>
                            <li class="has-sub"><a href="#">Handphone</a>
                                <ul>
                                    <li><a href="#">Aksesoris</a></li>
                                    <li><a href="#">Handphone</a></li>
                                </ul>
                            </li>
                            <li class="has-sub"><a href="#">Komputer</a>
                                <ul>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Monitor</a></li>
                                    <li><a href="#">Penyimpanan</a></li>
                                    <li><a href="#">CPU</a></li>
                                </ul>
                            </li>
                            <li class="has-sub"><a href="#">Otomotif</a>
                                <ul>
                                    <li><a href="#">Motor</a></li>
                                    <li><a href="#">Mobil</a></li>
                                    <li><a href="#">Spare Part</a></li>
                                    <li><a href="#">Velg dan Ban</a></li>
                                    <li><a href="#">Aksesoris</a></li>
                                </ul>
                            </li>
                            <li class="has-sub"><a href="#">Fashion</a>
                                <ul>
                                    <li><a href="#">Pria</a></li>
                                    <li><a href="#">Wanita</a></li>
                                    <li><a href="#">Anak-anak</a></li>
                                </ul>
                            </li>
                            <li class="has-sub"><a href="#">Rumah Tangga</a>
                                <ul>
                                    <li><a href="#">Dapur</a></li>
                                    <li><a href="#">Ruang Tamu</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Lihat Semua</a></li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="fa fa-list-alt"></i> Wishlist</a></li>
                    <li><a href="#"><i class="fa fa-dollar"></i> Promo</a></li>
                    <li><a href="#"><i class="fa fa-question-circle"></i> Bantuan</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Menu
