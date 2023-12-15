import { createRoot } from 'react-dom/client'
import { App1, App2, App3 } from './Apps'

createRoot(document.getElementById('root'))    //Hay que ir comentando las lineas para mostrar solo una
    .render(<App1 />)
    // .render(<App2 />)
    // .render(<App3 />)
