// если экспорт был именованный, то при импорте указываются точные названия и используются синтаксис с {}
import s from './arrays.js'

// ❌ такая запись не верна
// import APP_VERSION, DEVELOPER from './constants'

// можно давать любое имя при импорте, если экспорт был по умолчанию
import theBestFunction from './function.js'

console.log(theBestFunction());


console.log(s)