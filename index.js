import Post from './Post'
import json from './assets/json.json'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import ToxinLogo from './img/Logo.png'
import './styles/style.css'
const post = new Post('Toxinmaket post title', ToxinLogo)
console.log('Post to String:', post.toString())
console.log('JSON:', json)
console.log('XML:', xml)

console.log('CSV:',csv)