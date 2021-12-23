import React from "react";
import "./Detail.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
export default function DetailProduct() {
  return (
    <div>
      <div className="banner row d-flex justify-content-center align-items-center">
        <div className="col-md-7 text-left p-0">
          <h1>SHOP</h1>
        </div>
        <div className="col-md-5 text-right p-0">
          <h4>
            Home/<a href="#">Shop</a>/<a href="#">nameCategory</a>NameProduct
          </h4>
        </div>
      </div>
      <div className="content1 row mb-5">
        <div className="col-md-2">
          <div className="row zoom1 mb-5">
            <img src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/masonry-wide-shop-img-10-550x550.jpg" />
          </div>
          <div className="row zoom2 mb-5">
            <img src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/masonry-wide-shop-img-10-550x550.jpg" />
          </div>
          <div className="row zoom3">
            <img src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/masonry-wide-shop-img-10-550x550.jpg" />
          </div>
        </div>
        <div className="col-md-6 ">
          <img
            src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/masonry-wide-shop-img-10-550x550.jpg"
            className=" img-fluid w-100"
          />
        </div>
        <div className="col-md-4">
          <h1>Name Product</h1>
          <h4>price Product</h4>
          <h3>
            <img
              src="https://icon-library.com/images/black-star-icon/black-star-icon-17.jpg"
              width="20px;"
            />
            <img
              src="https://png.pngtree.com/element_our/png_detail/20181227/star-line-black-icon-png_287224.jpg"
              width="20px;"
              alt="Star Line Black Icon, Star Icons, Line Icons, Black Icons PNG and Vector  with Transparent Background for Free Download"
            />
          </h3>
          <h4>Description Product</h4>
          <h4>
            <strong>SKU:</strong> idProduct
          </h4>
          <h4>
            <strong>Category:</strong>nameCategory
          </h4>
          <div className="row ">
            <div className="col-md-2">
              <strong>Share:</strong>
            </div>
            <div className="col-md-1">
              <img
                src="https://www.vhv.rs/dpng/d/80-808195_youtube-black-and-white-icons-png-transparent-png.png"
                alt="Youtube Black And White Icons Png, Transparent Png - vhv"
                width="20"
                height="20"
              />
            </div>
            <div className="col-md-1">
              <img
                src="https://i.pinimg.com/736x/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg"
                alt="Facebook Logo Red Transparent - Fb Icon White Png Clipart in 2021 | Facebook  logo transparent, Facebook and instagram logo, Facebook icons"
                width="20"
                height="20"
              />
            </div>
            <div className="col-md-1">
              <img
                src="https://e7.pngegg.com/pngimages/46/1008/png-clipart-computer-icons-twitter-leaf-logo.png"
                alt="Silhouette Computer Icons Twitter, twitter, logo, monochrome png | PNGEgg"
                width="20"
                height="20"
              />
            </div>
            <div className="col-md-1">
              <img
                src="https://img.favpng.com/18/3/11/computer-icons-linkedin-png-favpng-GgCihq48SAGYiUvbtXCDyZ2m8.jpg"
                alt="LinkedIn, PNG, 2048x2048px, Linkedin, Black And White, Brand, Logo, Symbol  Download Free"
                width="20"
                height="20"
              />
            </div>
          </div>
          <div className="row pt-5">
            <div class="col-md-3">
              <input
                type="number"
                value="qualityProduct"
                name="qualityProduct"
                class="w-100"
              />
            </div>
            <div className="col-md-5">
              <button type="button" className="btn1 btn btn-outline-dark w-100">
                ADD TO CARD
              </button>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-3">
              <img
                width="20px;"
                src="https://kenh14cdn.com/203336854389633024/2021/3/7/1-16150665630681271218913.jpg"
              />
            </div>
            <div className="col-md-9">
              <a href="#">
                <strong>ADD TO WISHLIST</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content2 row mb-5">
        <div className="col-md-12">
          <Tabs>
            <TabList>
              <Tab className={" btn btn-outlet-dark "}>
                <a className="b">DESCRIPTION</a>
              </Tab>
              <Tab className={"btn btn-outlet-dark"}>
                <a className="b">ADDITIONAL INFORMATION</a>
              </Tab>
              <Tab className={"btn btn-outlet-dark"}>
                <a className="b">REVIEW</a>
              </Tab>
            </TabList>

            <TabPanel>
              <h3>Description Product</h3>
            </TabPanel>
            <TabPanel>
              <div class="row">
                <strong>Weight:weightProduct kg</strong>
              </div>
              <div class="row">
                <strong>Demensions: descriptionProduct cm</strong>
              </div>
            </TabPanel>
            <TabPanel>
              <a>
                <strong>REVIEW FOR nameProduct</strong>
              </a>
              <a>
                <strong>nameUser</strong>{" "}
              </a>
              <br />
              <a>
                <strong>Add a review: </strong>
              </a>
              <a>
                Your email address will not be published. Required fields are
                marked *
              </a>
              <br />
              <a>Your rating</a>
              <br />

              <img
                src="https://png.pngtree.com/element_our/png_detail/20181227/star-line-black-icon-png_287224.jpg"
                alt="Star "
                className="staricon"
              />
              <img
                src="https://png.pngtree.com/element_our/png_detail/20181227/star-line-black-icon-png_287224.jpg"
                alt="Star "
                className="staricon"
              />
              <img
                src="https://png.pngtree.com/element_our/png_detail/20181227/star-line-black-icon-png_287224.jpg"
                alt="Star "
                className="staricon"
              />
              <h4>Your review</h4>
              <div class="row">
                <textarea
                  cols="5000"
                  id="reviewUser"
                  name="reviewUser"
                  rows="10"
                ></textarea>
              </div>
              <div class="row">Name*</div>
              <div class="row">
                <textarea
                  cols="5000"
                  id="nameUser"
                  name="nameUser"
                  rows="2"
                ></textarea>
              </div>
              <div class="row">Email*</div>
              <div class="row">
                <textarea
                  cols="5000"
                  id="emailUser"
                  name="emailUser"
                  rows="2"
                ></textarea>
              </div>
              <div class="row">
                <div class="col-md-8">
                  <input type="checkbox" />
                  <label>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
              </div>
              <div class="row ">
                <div class="col-md-2">
                  <button type="button" class="btn1 btn btn-outline-dark w-100">
                    SUBMIT
                  </button>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className="footer2 ">
        <div className="row relate mb-5">
          <h3>
            <strong>RELATED PRODUCTS</strong>
          </h3>
        </div>
        <div className="row">
          <div className="pic col-md-3 mb-5">
            <div>
              <div className="img-top">
                <img
                  src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/masonry-wide-shop-img-10-550x550.jpg"
                  width="262"
                  height="262"
                  className="img-fluid "
                  alt="Giỏ hàng"
                />
                <div className="caption row">
                  <div className="blur"></div>
                  <div className="caption-text row text-center p-5">
                    <img
                      className="col-md-3 img-fluid"
                      src="https://banner2.cleanpng.com/20180329/soe/kisspng-shopping-cart-computer-icons-online-shopping-shopping-cart-5abcc5a2ec2168.4054516615223208029672.jpg"
                      alt="Giỏ hàng"
                    />
                    <p className="col-md-9">
                      <b>ADD TO CARD</b>
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 text-left">
                  <label>
                    <a href="#">Name Product</a>
                  </label>
                </div>
                <div className="col-md-6 text-center row">
                  <span>
                    <img
                      className="col-md-7"
                      src="https://kenh14cdn.com/203336854389633024/2021/3/7/1-16150665630681271218913.jpg"
                      alt="Dùng"
                    />
                    <strong>price$</strong>
                  </span>
                </div>
              </div>

              <div className="row ">
                <div className="col-md-7 ">
                  <label>Name Cate</label>
                </div>
                <div className="col-md-5 text-right">
                  <img
                    src="https://icon-library.com/images/black-star-icon/black-star-icon-17.jpg"
                    width="20px;"
                    alt="star"
                  />
                  <img
                    src="https://png.pngtree.com/element_our/png_detail/20181227/star-line-black-icon-png_287224.jpg"
                    width="20px;"
                    alt="Star Line Black "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pic col-md-3 mb-5">
            <div>
              <div className="img-top">
                <img
                  src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/masonry-wide-shop-img-10-550x550.jpg"
                  width="262"
                  height="262"
                  className="img-fluid "
                  alt="Giỏ hàng"
                />
                <div className="caption row">
                  <div className="blur"></div>
                  <div className="caption-text row text-center p-5">
                    <img
                      className="col-md-3 img-fluid"
                      src="https://banner2.cleanpng.com/20180329/soe/kisspng-shopping-cart-computer-icons-online-shopping-shopping-cart-5abcc5a2ec2168.4054516615223208029672.jpg"
                      alt="Giỏ hàng"
                    />
                    <p className="col-md-9">
                      <b>ADD TO CARD</b>
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 text-left">
                  <label>
                    <a href="#">Name Product</a>
                  </label>
                </div>
                <div className="col-md-6 text-center row">
                  <span>
                    <img
                      className="col-md-7"
                      src="https://kenh14cdn.com/203336854389633024/2021/3/7/1-16150665630681271218913.jpg"
                      alt="Dùng"
                    />
                    <strong>price$</strong>
                  </span>
                </div>
              </div>

              <div className="row ">
                <div className="col-md-7 ">
                  <label>Name Cate</label>
                </div>
                <div className="col-md-5 text-right">
                  <img
                    src="https://icon-library.com/images/black-star-icon/black-star-icon-17.jpg"
                    width="20px;"
                    alt="star"
                  />
                  <img
                    src="https://png.pngtree.com/element_our/png_detail/20181227/star-line-black-icon-png_287224.jpg"
                    width="20px;"
                    alt="Star Line Black "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pic col-md-3 mb-5">
            <div>
              <div className="img-top">
                <img
                  src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/masonry-wide-shop-img-10-550x550.jpg"
                  width="262"
                  height="262"
                  className="img-fluid "
                  alt="Giỏ hàng"
                />
                <div className="caption row">
                  <div className="blur"></div>
                  <div className="caption-text row text-center p-5">
                    <img
                      className="col-md-3 img-fluid"
                      src="https://banner2.cleanpng.com/20180329/soe/kisspng-shopping-cart-computer-icons-online-shopping-shopping-cart-5abcc5a2ec2168.4054516615223208029672.jpg"
                      alt="Giỏ hàng"
                    />
                    <p className="col-md-9">
                      <b>ADD TO CARD</b>
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 text-left">
                  <label>
                    <a href="#">Name Product</a>
                  </label>
                </div>
                <div className="col-md-6 text-center row">
                  <span>
                    <img
                      className="col-md-7"
                      src="https://kenh14cdn.com/203336854389633024/2021/3/7/1-16150665630681271218913.jpg"
                      alt="Dùng"
                    />
                    <strong>price$</strong>
                  </span>
                </div>
              </div>

              <div className="row ">
                <div className="col-md-7 ">
                  <label>Name Cate</label>
                </div>
                <div className="col-md-5 text-right">
                  <img
                    src="https://icon-library.com/images/black-star-icon/black-star-icon-17.jpg"
                    width="20px;"
                    alt="star"
                  />
                  <img
                    src="https://png.pngtree.com/element_our/png_detail/20181227/star-line-black-icon-png_287224.jpg"
                    width="20px;"
                    alt="Star Line Black "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pic col-md-3 mb-5">
            <div>
              <div className="img-top">
                <img
                  src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/masonry-wide-shop-img-10-550x550.jpg"
                  width="262"
                  height="262"
                  className="img-fluid "
                  alt="Giỏ hàng"
                />
                <div className="caption row">
                  <div className="blur"></div>
                  <div className="caption-text row text-center p-5">
                    <img
                      className="col-md-3 img-fluid"
                      src="https://banner2.cleanpng.com/20180329/soe/kisspng-shopping-cart-computer-icons-online-shopping-shopping-cart-5abcc5a2ec2168.4054516615223208029672.jpg"
                      alt="Giỏ hàng"
                    />
                    <p className="col-md-9">
                      <b>ADD TO CARD</b>
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 text-left">
                  <label>
                    <a href="#">Name Product</a>
                  </label>
                </div>
                <div className="col-md-6 text-center row">
                  <span>
                    <img
                      className="col-md-7"
                      src="https://kenh14cdn.com/203336854389633024/2021/3/7/1-16150665630681271218913.jpg"
                      alt="Dùng"
                    />
                    <strong>price$</strong>
                  </span>
                </div>
              </div>

              <div className="row ">
                <div className="col-md-7 ">
                  <label>Name Cate</label>
                </div>
                <div className="col-md-5 text-right">
                  <img
                    src="https://icon-library.com/images/black-star-icon/black-star-icon-17.jpg"
                    width="20px;"
                    alt="star"
                  />
                  <img
                    src="https://png.pngtree.com/element_our/png_detail/20181227/star-line-black-icon-png_287224.jpg"
                    width="20px;"
                    alt="Star Line Black "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
