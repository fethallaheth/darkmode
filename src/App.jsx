import  { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
function App() {
   const [darkMode, setDarkMode] = useState(false);
   return (
     <div className={`${darkMode ? "dark" : "light"} mode-container`}>
       <div className="flex justify-between items-center">
         <h2 className="mx-2 font-bold text-xl ">LINGUIN</h2>
         <div className="mx-3 flex justify-between">
           <a
             className="mx-1 text-lg italic underline decoration"
             href="google"
           >
             Google
           </a>
           <a
             className="mx-1 text-lg italic underline decoration"
             href="/"
           >
             discord
           </a>
           <a
             className="mx-1 text-lg italic underline decoration"
             href="/"
           >
             Twitter
           </a>
         </div>
         <div className="grid justify-items-end  m-2">
           <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
         </div>
       </div>
     </div>
   );
}
export default App;