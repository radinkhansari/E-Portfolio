import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}



























// // this was the previous one
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
//  import { Home } from './pages/Home.jsx'
// import { NotFound } from './pages/NotFound.jsx'

// //import { BrowserRouter } from "react-router-dom";

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route index element={<Home />} />
// //         <Route path="*" element={<NotFound />} />
// //       </Routes>
// //     </BrowserRouter>
// //   )
// // }

// export default function App() {
//   return (
//     <BrowserRouter basename="/E-Portfolio">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }


















//export default App

// src/App.jsx


// export default function App() {
//   return (
//     <div style={{ padding: 24 }}>
//       <h1>App.jsx is rendering radin sadra radin arta arta arta mamy✅</h1>
//       <p>If you see this, React is fine.</p>
//     </div>
//   );
// }


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//       <Route index element={<Home />} />
//       </Routes>
      
//     </BrowserRouter>
//   );
// }
