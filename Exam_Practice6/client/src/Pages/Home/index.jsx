import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaInfo } from "react-icons/fa6";
import { BASE_URL } from "../../Constants/constants";
import axios from "axios";
import { WishlistContext } from "../../Context/WishlistContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate(null);
  const [products, setFavorites] = useState([]);
  const { favorites, toggleWishlist } = useContext(WishlistContext);

  const getData = async () => {
    const { data } = await axios(`${BASE_URL}`);
    setFavorites(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const getDetail = (id) => {
    navigate(`${id}`);
  };

  return (
    <>
      <main>
        <section id="main-first">
          <div className="container">
            <div className="herobanner">
              <div className="herobanner-text">
                <span>Winter Fashion</span>
                <h1>
                  <span>Fashion</span> Collection 2019
                </h1>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </section>
        <section id="main-category">
          <div className="row">
            <div className="col-4 col-sm-12">
              <div className="card card-1">
                <div className="card-text">
                  <h3>Shop For Male</h3>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-12">
              <div className="card card-2">
                <div className="card-text">
                  <h3>Shop For Female</h3>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-12">
              <div className="card card-3">
                <div className="card-text">
                  <h3>Shop For Male</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="main-dynamic">
          <div className="container">
            <div className="row">
              {products &&
                products.map((p) => (
                  <div key={p._id} className="col-4 col-sm-12">
                    <div className="card" style={{backgroundImage:`url(${p.imgUrl})`}}>
                      <div className="card-text">
                        <span>{p.title}</span>
                        <h2>{p.name}</h2>
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={`${p.rate}`}
                            precision={1}
                            readOnly
                          />
                        </Stack>
                        <h3>${p.price}</h3>
                        <div className="card-btns">
                          <ul>
                            <li>
                              <button onClick={() => toggleWishlist(p)}>
                                {favorites.find((f) => f._id === p._id) ? (
                                  <FaHeart />
                                ) : (
                                  <CiHeart />
                                )}
                              </button>
                            </li>
                            <li>
                              <button onClick={() => getDetail(p._id)}>
                                <FaInfo />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
