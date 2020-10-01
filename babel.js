

async function start(){
    await Promise.resolve('async is working')
}
start().then(console.log)

const unsed =42

class Util {
    static id = Date.now()

}
console.log('Util id', Util.id)
console.log(unsed)
import('lodash').then( _ => {
    console.log('lodash', _.random(0,42,true))
})