import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

// Display slider
const Home = () => {
    // get random hex color
    // return 6 characters
    var randHexColor = function() {
        return Math.floor(Math.random()*16777215).toString(16);
    }

    // get random image from dummyimage.com
    var randImg = function() {
        return "https://dummyimage.com/300x200/" + randHexColor() + "/fff.jpg&text=+";
    }

    return (
        <CSSTransitionGroup
            transitionName="homeTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>

            <div class="content-container animated fadeInUp">

                <div class="page-block margin-bottom">

                    <h2 class="block-title">
                        <span>Best Sales</span>
                        <a href="#" class="list-all">
                            <i class="fa fa-th-list"></i>
                        </a>
                    </h2>

                    <ol class="product-list-slider top-product">
                        <li>
                            <div class="thumb">
                                <a href="#">
                                    <img src={ randImg() } alt="" />
                                </a>
                            </div>
                            <div class="product-ctn">
                                <div class="product-name">
                                    <a href="/#/detail-product">Pink Blazer</a>
                                </div>
                                <div class="rating-price">
                                    <div class="rating">
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="price">
                                        <span class="price-before">Rp 7.500.000</span>
                                        <span class="price-current">Rp 2.900.000</span>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li>
                            <div class="thumb">
                                <a href="#">
                                    <img src={ randImg() } alt="" />
                                </a>
                            </div>
                            <div class="product-ctn">
                                <div class="product-name">
                                    <a href="/#/detail-product">Jaket Kulit</a>
                                </div>
                                <div class="rating-price">
                                    <div class="rating">
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="price">
                                        <span class="price-before">Rp 350.000</span>
                                        <span class="price-current">Rp 330.000</span>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li>
                            <div class="thumb">
                                <a href="#">
                                    <img src={ randImg() } alt="" />
                                </a>
                            </div>
                            <div class="product-ctn">
                                <div class="product-name">
                                    <a href="/#/detail-product">Jam Tangan</a>
                                </div>
                                <div class="rating-price">
                                    <div class="rating">
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                    </div>
                                    <div class="price">
                                        <span class="price-current">Rp 550.000</span>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li>
                            <div class="thumb">
                                <a href="#">
                                    <img src={ randImg() } alt="" />
                                </a>
                            </div>
                            <div class="product-ctn">
                                <div class="product-name">
                                    <a href="/#/detail-product">Hair Dryer</a>
                                </div>
                                <div class="rating-price">
                                    <div class="rating">
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="price">
                                        <span class="price-before">Rp 200.000</span>
                                        <span class="price-current">Rp 180.000</span>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li>
                            <div class="thumb">
                                <a href="#">
                                    <img src={ randImg() } alt="" />
                                </a>
                            </div>
                            <div class="product-ctn">
                                <div class="product-name">
                                    <a href="/#/detail-product">Handphone 8/256</a>
                                </div>
                                <div class="rating-price">
                                    <div class="rating">
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="price">
                                        <span class="price-before">Rp 4.999.000</span>
                                        <span class="price-current">Rp 4.290.000</span>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </li>
                    </ol>

                    <div class="clear"></div>

                </div>
            </div>
        </CSSTransitionGroup>
    )
}

export default Home
