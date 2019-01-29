import React 	from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

// Footer
const Footer = () => {
    return (

        <div class="footer">

			<div class="footer-main">
				<p>
					<span class="block text-small">Pembayaran yang di dukung</span>
					<i class="fa fa-cc-amex"></i>
					<i class="fa fa-cc-mastercard"></i>
					<i class="fa fa-credit-card"></i>
					<i class="fa fa-cc-paypal"></i>
					<i class="fa fa-cc-visa"></i>
					<i class="fa fa-google-wallet"></i>
					<i class="fa fa-cc-discover"></i>
					<i class="fa fa-cc-jcb"></i>
				</p>
				<p>
					<span class="block text-small">Belanja Online Murah di Ecommerce</span>
					Tidak hanya menawarkan produk dengan harga murah terjangkau.
				</p>

				<div class="social-footer">
					<a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
					<a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
					<a href="#" class="gplus"><i class="fa fa-google-plus"></i></a>
				</div>
			</div>

			<div class="copyright">
				<span class="block">&copy; Footer</span>
				<div class="navigation">
					<a href="#">Term &amp; Condition</a>
					<a href="#">Privacy Policy</a>
				</div>
			</div>

		</div>

    )
}

export default Footer
