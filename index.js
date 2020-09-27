import Post from './Post'
import json from './assets/json.json'
import ToxinLogo from './img/Logo.png'
import './styles/style.css'
const post = new Post('Toxinmaket post title', ToxinLogo)
console.log('Post to String:', post.toString())
console.log('JSON:', json)