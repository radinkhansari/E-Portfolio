import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// console.log('✅ main.jsx loaded')

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <div style={{ padding: 12 }}>main.jsx is working!</div>
//     <App />
//   </StrictMode>
// )


//<div>main.jsx is working! is everything working properly?</div>