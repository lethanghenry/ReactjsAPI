import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchProduct from "./SearchProduct";
import SearchProductByCate from "./SearchProductByCate";
import { Link } from "react-router-dom";
export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [productsMax, setProductsMax] = useState([]);
  const [list, setList] = useState([]);

  // Show List Product rate max
  const getListProductMax = () => {
    axios
      .get(`https://localhost:44393/api/Products/max`)
      .then((res) => {
        setProductsMax(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getListProductMax();
  }, []);

  // Show all List Category
  const getListCategory = () => {
    axios
      .get(`https://localhost:44393/api/Categories`)
      .then((res) => {
        setCategorys(res.data);
      })
      .catch((error) => console.log(error));
  };

  // Call api get
  useEffect(() => {
    getListCategory();
  }, []);

  // Show all list Product
  const getListProduct = () => {
    axios
      .get(`https://localhost:44393/api/Products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  };

  // Call api get
  useEffect(() => {
    getListProduct();
  }, []);

  // Search Product by nameProduct
  const searchNameProduct = (nameProduct) => {
    axios
      .get(
        `https://localhost:44393/api/Products?nameSearchProduct=${nameProduct}`
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  };

  const searchNameCategory = (nameCategory) => {
    axios
      .get(
        `https://localhost:44393/api/Products?nameSearchProductByCategory=${nameCategory}`
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="banner row ">
        <div className="col-md-9 text-left p-0">
          <h1>
            <strong class="a">SHOP</strong>
          </h1>
        </div>
        <div className="col-md-3 text-right p-0">
          <h2>Home</h2>
        </div>
      </div>
      <div className="content row">
        <div className="contentleft  col-md-9">
          <div className="row mb-3">
            <div className="show col-md-4 text-left">
              <label>showing 1-12 of 78 results</label>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4 ">
              <div className="dropdown text-right">
                <select>
                  <option selected>default sorting</option>
                  <option>Sort By Popularity</option>
                  <option>Sort By Average rating</option>
                  <option>Sort By Newness</option>
                  <option>Sort By Price: Low To High</option>
                  <option>Sort By Price: High To Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            {products.map((value, key) => {
              var testBlackStar = [];
              var testWhiteStar = [];

              for (var i = 0; i < value.rateProduct; i++) {
                testBlackStar.push(
                  <img
                    src="https://icon-library.com/images/black-star-icon/black-star-icon-17.jpg"
                    width="20px;"
                    alt="Star Line Black "
                  />
                );
              }

              for (var i = 0; i < 5 - value.rateProduct; i++) {
                testWhiteStar.push(
                  <img
                    src="https://png.pngtree.com/element_our/png_detail/20181227/star-line-black-icon-png_287224.jpg"
                    width="20px;"
                    alt="Star Line Black "
                  />
                );
              }

              return (
                <div className="pic col-md-4 mb-5">
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
                          <a href="/DetailProduct/idProduct">
                            {value.nameProduct}
                          </a>
                        </label>
                      </div>
                      <div className="col-md-6 text-center row">
                        <span>
                          <img
                            className="col-md-7"
                            src="https://kenh14cdn.com/203336854389633024/2021/3/7/1-16150665630681271218913.jpg"
                            alt="Dùng"
                          />
                          <strong> {value.priceProduct}$</strong>
                        </span>
                      </div>
                    </div>

                    <div className="row ">
                      <div className="col-md-5 ">
                        {categorys.map((cate) => {
                          if (value.idCategory == cate.idCategory) {
                            return cate.nameCategory;
                          }
                        })}
                      </div>
                      <div className="col-md-7 text-right">
                        {testBlackStar}
                        {testWhiteStar}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="contentright col-md-3">
          <div className=" row ml-1">
            <SearchProduct searchNameProduct={searchNameProduct} />
          </div>
          <div className="row ml-1">
            <strong>CATEGORIES:</strong>
          </div>
          <div className="menu3">
            <ul>
              {categorys.map((value2, key2) => {
                return (
                  <li>
                    <Link to={`/Category/Edit/${value2.nameCategory}`}>
                      {value2.nameCategory}
                    </Link>{" "}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="row ml-1">
            <strong>BEST PRODUCTS</strong>
          </div>
          {productsMax.map((value3, key3) => {
            var testBlackStar = [];
            var testWhiteStar = [];

            for (var i = 0; i < value3.rateProduct; i++) {
              testBlackStar.push(
                <img
                  src="https://icon-library.com/images/black-star-icon/black-star-icon-17.jpg"
                  width="20px;"
                  alt="Star Line Black "
                />
              );
            }

            for (var i = 0; i < 5 - value3.rateProduct; i++) {
              testWhiteStar.push(
                <img
                  src="https://png.pngtree.com/element_our/png_detail/20181227/star-line-black-icon-png_287224.jpg"
                  width="20px;"
                  alt="Star Line Black "
                />
              );
            }
            if (key3 < 3)
              return (
                <div className="row mt-5">
                  <div className="col-md-6">
                    <a href="./DetailProduct/:idProduct">
                      <img
                        src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/masonry-wide-shop-img-10-550x550.jpg"
                        class="img-fluid "
                      />
                    </a>
                  </div>
                  <div className="menuProductMax col-md-6  ">
                    <ul>
                      <li>
                        <strong>
                          <a href="./DetailProduct/:idProduct">
                            <u>{value3.nameProduct}</u>
                          </a>
                        </strong>
                      </li>
                      <li>
                        {testBlackStar}
                        {testWhiteStar}
                      </li>
                      <li>
                        <strong>{value3.priceProduct}$</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              );
          })}

          <div class="row mt-5 ml-1">
            <strong>BANNER:</strong>
          </div>
          <div class="picturebanner row mt-5 ml-1 ">
            <img
              src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/shop-sidebar-banner-img.jpg"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
