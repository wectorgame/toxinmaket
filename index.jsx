import * as $ from "jquery";
import Post from "./models/Post";

/* import json from './assets/json.json'
import xml from './assets/data.xml'
import csv from './assets/data.csv' */
import ToxinLogo from "./img/Logo.png";
import React from "react";
import { render } from "react-dom";
import "./styles/style.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "./babel";
const post = new Post("Toxinmaket post title", ToxinLogo);
console.log("Post to String:", post.toString());

const App = () => (
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
        <i class="material-icons">arrow_forward</i>
        </div>
      </div>
    </footer>
    <div className="empty"></div>
    
  </div>
);

render(<App />, document.getElementById("app"));
/* console.log('JSON:', json)
console.log('XML:', xml)

console.log('CSV:',csv) */
