import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

// Display product detail
const DetailProduct = () => {
    var random = "https://dummyimage.com/600x400/" + Math.floor(Math.random()*16777215).toString(16) + "/fff.jpg&text=+";

    return (
        <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div class="content-container">

                <div class="content-header">

                    <div class="breadcrumbs animated fadeIn">
                        <a href="#!">Fashion</a>
                        <a href="#!">Pria</a>
                        <a class="active" href="#!">Outwear</a>
                    </div>

                    <h2 class="product-title animated fadeIn">Jaket Kulit</h2>

                    <ul class="product-slider animated fadeInRight">
                        <li>
                            <img src={ random } alt="img" />
                        </li>
                        <li>
                            <img src="https://dummyimage.com/600x400/50a5c7/fff.jpg&text=+" alt="img" />
                        </li>
                        <li>
                            <img src="https://dummyimage.com/600x400/50a5c7/fff.jpg&text=+" alt="img" />
                        </li>
                    </ul>

                    <div class="product-meta animated fadeInUp">
                        <div class="rating">
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="price">
                            <span class="price-before">Rp 350.000</span> Rp 330.000
                        </div>

                        <div class="availability in-stock">
                            In Stock
                        </div>
                    </div>
                </div>

                <div class="product-tabs">
                    <ul class="tabs">
                        <li class="tab"><a class="active" href="#detail">Detail</a></li>
                        <li class="tab"><a href="#review">Review</a></li>
                    </ul>
                </div>

                <div class="product-content">

                    <div class="tab-content" id="detail">
                        <p>DETAIL UKURAN<br />
                            - S ( P 67 cm L dada 51 cm L perut 46 cm L pundak 43 cm L Lengan 56 cm)<br />
                            - M ( P 69 cm L dada 53 cm L perut 48 cm L pundak 45 cm L Lengan 58 cm)<br />
                            - L ( P 71 cm L dada 55 cm L perut 50 cm L pundak 48 cm Lengan 60 cm)<br />
                            - XL ( P 73 cm L dada 57 cm L perut 52 cm L pundak 50 cm Lengan 61 cm)<br />
                        </p>
                        <p>Produk kami dibuat oleh produsen profesional dari bahan berkualitas tinggi, di desain dengan desain yang moderen dan dirancang agar user bisa merasakan kenyamanan berpakaian karena kenyamanan dan kesehatan pemakai menjadi salah satu perhatian produsen produk kami. Produk kami termurah dikelas fashion High Quality jadi jangan bandingkan dengan produk lokal biasa.</p>
                    </div>

                    <div class="tab-content" id="review">

                        <ol class="product-review-list">
                            <li>
                                <div class="review-idty">
                                    <div class="name">
                                        Agung Remaja
                                    </div>
                                    <div class="product-rating">
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                    </div>
                                </div>
                                <div class="review-ctn">
                                    Murah tapi bagus
                                </div>
                            </li>
                            <li>
                                <div class="review-idty">
                                    <div class="name">
                                        Dian Permata
                                    </div>
                                    <div class="product-rating">
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                                <div class="review-ctn">
                                    Semoga suami suka
                                </div>
                            </li>
                            <li>
                                <div class="review-idty">
                                    <div class="name">
                                        Titan Swadaya
                                    </div>
                                    <div class="product-rating">
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                                <div class="review-ctn">
                                    Biasa aja
                                </div>
                            </li>
                            <li>
                                <div class="review-idty">
                                    <div class="name">
                                        Nico Robin
                                    </div>
                                    <div class="product-rating">
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                                <div class="review-ctn">
                                    Barang sesuai harga
                                </div>
                            </li>
                        </ol>
                    </div>

                </div>

                <div class="product-action margin-bottom">
                    <a class="btn green btn-block margin-bottom_low" href="#">Beli</a>
                    <a class="btn grey btn-block" href="#">Tambah ke Wishlist</a>
                </div>

                <div class="product-share">
                    <a href="#" class="fb"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="tw"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="gplus"><i class="fa fa-google-plus"></i></a>
                    <a href="#" class="pint"><i class="fa fa-pinterest"></i></a>
                </div>

                <div class="line"></div>

                <div class="page-block">

                    <h2 class="block-title">
                        <span>Produk Terkait</span>
                    </h2>

                    <ol class="product-list-slider">
                        <li>
                            <div class="thumb">
                                <a href="/#/detail-product">
                                    <img src="https://dummyimage.com/600x400/50a5c7/fff.jpg&text=+" alt="" />
                                </a>
                            </div>
                            <div class="product-ctn">
                                <div class="product-name">
                                    <a href="/#/detail-product">
                                        Pink Blazer
                                    </a>
                                </div>
                                <div class="rating">
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <div class="price">
                                    <span class="price-before">Rp 2.750.000</span>
                                    <span class="price-current">Rp 2.200.000</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="thumb">
                                <a href="/#/detail-product">
                                    <img src="https://dummyimage.com/600x400/50a5c7/fff.jpg&text=+" alt="" />
                                </a>
                            </div>
                            <div class="product-ctn">
                                <div class="product-name">
                                    <a href="/#/detail-product">
                                        Jaket Kulit Pekat
                                    </a>
                                </div>
                                <div class="rating">
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <div class="price">
                                    <span class="price-before">Rp 375.000</span>
                                    <span class="price-current">Rp 340.000</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="thumb">
                                <a href="/#/detail-product">
                                    <img src="https://dummyimage.com/600x400/50a5c7/fff.jpg&text=+" alt="" />
                                </a>
                            </div>
                            <div class="product-ctn">
                                <div class="product-name">
                                    <a href="/#/detail-product">
                                        Modern Watch
                                    </a>
                                </div>
                                <div class="rating">
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                </div>
                                <div class="price">
                                    <span class="price-current">$ 260.9</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="thumb">
                                <a href="/#/detail-product">
                                    <img src="https://dummyimage.com/600x400/50a5c7/fff.jpg&text=+" alt="" />
                                </a>
                            </div>
                            <div class="product-ctn">
                                <div class="product-name">
                                    <a href="/#/detail-product">
                                        Tablet Mini 2
                                    </a>
                                </div>
                                <div class="rating">
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star active"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <div class="price">
                                    <span class="price-before">$ 499.00</span>
                                    <span class="price-current">$ 472.5</span>
                                </div>
                            </div>
                        </li>
                    </ol>

                    <div class="clear"></div>

                </div>

            </div>
        </CSSTransitionGroup>
    )
}

export default DetailProduct
