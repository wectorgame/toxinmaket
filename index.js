import * as $ from 'jquery'
import Post from './models/Post'
/* import json from './assets/json.json'
import xml from './assets/data.xml'
import csv from './assets/data.csv' */
import ToxinLogo from './img/Logo.png'
import './styles/style.css'
const post = new Post('Toxinmaket post title', ToxinLogo)
console.log('Post to String:', post.toString())
$('pre').addClass('code').html(post.toString())
/* console.log('JSON:', json)
console.log('XML:', xml)

console.log('CSV:',csv) */