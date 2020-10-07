import * as $ from "jquery";
import Post from "./models/Post";
import _ from "lodash";
/* import json from './assets/json.json'
import xml from './assets/data.xml'
import csv from './assets/data.csv' */
import ToxinLogo from "./img/Logo.png";
import Hotel1 from "./img/hotel-1.png";
import React from "react";
import { render } from "react-dom";
import "./styles/style.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "./babel";
const post = new Post("Toxinmaket post title", ToxinLogo);
console.log("Post to String:", post.toString());

const App = () => (
  <>
    <CardsLux />
    <LogIn />
    <Cards />

    <div class="container">
      <div class="navbar">
        <img src="img/Logo.png" alt="" class="nav-img" />

        <ul class="menu-list">
          <li class="active">
            <a href="#"> О нас </a>
          </li>
          <li class="nav-services">
            <a href="#" class="not-active">
              {" "}
              Услуги
            </a>
            <ul class="sub-menu-1">
              <li>
                <a href="#"> Жилье</a>
              </li>
              <li>
                <a href="#"> Заказ</a>
              </li>
              <li>
                <a href="#"> Бронь</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="not-active">
              {" "}
              Вакансии
            </a>
          </li>
          <li>
            <a href="#" class="not-active">
              {" "}
              Новости
            </a>
          </li>
          <li>
            <a href="#" class="not-active">
              Соглашение
            </a>
          </li>
        </ul>
        <button class="btn btn1">войти</button>
        <button class="btn btn2">зарегистрироваться</button>
      </div>

      <div class="navbar">
        <img src="img/Logo.png" alt="" class="nav-img" />
        <ul class="menu-list">
          <li class="active">
            <a href="#"> О нас </a>
          </li>
          <li class="nav-services">
            <a href="#" class="not-active">
              {" "}
              Услуги
            </a>
            <ul class="sub-menu-1">
              <li>
                <a href="#"> Жилье</a>
              </li>
              <li>
                <a href="#"> Заказ</a>
              </li>
              <li>
                <a href="#"> Бронь</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="not-active">
              {" "}
              Вакансии
            </a>
          </li>
          <li>
            <a href="#" class="not-active">
              {" "}
              Новости
            </a>
          </li>
          <li>
            <a href="#" class="not-active">
              Соглашение
            </a>
          </li>
        </ul>
        <div class="office">
          <a href="#" class="not-active">
            Юлий Цезарь
          </a>
        </div>
      </div>

      <footer class="footer-widgets">
        <div className="footer-groups">
          <div class="footer-group1">
            <img src="img/Logo.png" alt="" />
            <p class="footer-descp">
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </p>
          </div>
          <ul>
            <li class="footer-header">Навигация</li>
            <li class="not-active">О нас</li>
            <li class="not-active">Новости</li>
            <li class="not-active">Служба поддержки</li>
            <li class="not-active">Услуги</li>
          </ul>
          <ul>
            <li class="footer-header">О нас</li>
            <li class="not-active">О сервисе</li>
            <li class="not-active">Наша команда</li>
            <li class="not-active">Вакансии</li>
            <li class="not-active">Инвесторы</li>
          </ul>
          <ul>
            <li class="footer-header">Служба поддержки</li>
            <li class="not-active">Соглашения</li>
            <li class="not-active">Сообщества</li>
            <li class="not-active">Связь с нами</li>
          </ul>
          <div class="footer-group2">
            <p class="footer-header">подписка</p>
            <p class="footer-descp">
              Получайте специальные предложения и новости сервиса
            </p>
            <div className="inputWithIcon">
              <input type="text" placeholder="Email" class="input-email" />
              <i class="material-icons pink-icon ">arrow_forward</i>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-text">
            Copyright © 2018 Toxin отель. Все права зачищены.
          </div>

          <a href="http://twitter.com">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="http://facebook.com">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="http://instagram.com">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
      <div className="empty"></div>

      <div className="footer-small">
        <div class="footer-small-group">
          <img src="img/Logo.png" alt="" />
          <p class="footer-small-descp">
            Copyright © 2018 Toxin отель. Все права зачищены.
          </p>
          <a href="http://twitter.com">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="http://facebook.com">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="http://instagram.com">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="empty"></div>
    </div>
  </>
);

const Cards = () => (
  <>
    <div class="container">
      <div className="card">
        <div className="card-img">
          <div className="ellipse">
            <input type="radio" name="hotel" className="dot" />
            <input type="radio" name="hotel" className="dot" />
            <input type="radio" name="hotel" className="dot" />
            <input type="radio" name="hotel" className="dot" />
          </div>
        </div>
        <div className="card-info">
          <div className="card-number">№840</div>
          <div className="card-price">
            <p className="first-text">9 900₽&nbsp;</p>{" "}
            <p className="second-text"> в сутки</p>
          </div>
          <div className="card-border">
            <div className="card-stars">
              <i class="material-icons pink-icon">star</i>
              <i class="material-icons pink-icon">star</i>
              <i class="material-icons pink-icon">star</i>
              <i class="material-icons pink-icon">star</i>
              <i class="material-icons pink-icon">star_border</i>
            </div>
            <div className="card-reviews">
              <p className="first-text">65&nbsp;</p>{" "}
              <p className="second-text">отзывов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
const LogIn = () => (
  <div class="container">
    <div className="login-form">
      <h1 className="login-title">Войти</h1>
      <input type="text" placeholder="Email" class="login-email" />
      <input type="text" placeholder="Пароль" className="login-pw" />
      <div className="login-btn-with-icon">
        <button type="submit" className="login-btn">
          Войти
          <i class="material-icons login-arrow">arrow_forward</i>
        </button>
      </div>
      <div className="login-create">
        <p className="login-btn-text">Нет аккаунта на Toxin?</p>
        <button type="submit" className="login-btn-create">
          Создать
        </button>
      </div>
    </div>
  </div>
);

const CardsLux = () => (
  <div class="container">
    <div className="card">
      <div className="card-img card-img2">
        <div className="card-img-expands">
          <i class="material-icons expand-left">expand_more</i>
          <i class="material-icons expand-right">expand_more</i>
        </div>
        <div className="ellipse">
          <input type="radio" name="hotel" className="dot" />
          <input type="radio" name="hotel" className="dot" />
          <input type="radio" name="hotel" className="dot" />
          <input type="radio" name="hotel" className="dot" />
        </div>
      </div>
      <div className="card-info">
        <div className="card-number no-margin-right">№888</div>
        <div className="card-lux">люкс</div>
        <div className="card-price">
          <p className="first-text">9 990₽&nbsp;</p>{" "}
          <p className="second-text"> в сутки</p>{" "}
        </div>
        <div className="card-border">
          <div className="card-stars">
            <i class="material-icons pink-icon">star</i>
            <i class="material-icons pink-icon">star</i>
            <i class="material-icons pink-icon">star</i>
            <i class="material-icons pink-icon">star</i>
            <i class="material-icons pink-icon">star</i>
          </div>
          <div className="card-reviews">
            <p className="first-text">145&nbsp;</p>{" "}
            <p className="second-text">отзывов</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
render(<App />, document.getElementById("app"));
