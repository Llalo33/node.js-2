// если экспорт был именованный, то при импорте указываются точные названия и используются синтаксис с {}
import { APP_VERSION, DEVELOPER } from './constants'

// ❌ такая запись не верна
// import APP_VERSION, DEVELOPER from './constants'

// можно давать любое имя при импорте, если экспорт был по умолчанию
import theBestFunction from './function'

console.log(theBestFunction());

console.log(APP_VERSION, DEVELOPER);
