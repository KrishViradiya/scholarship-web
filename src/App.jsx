// App.js
// import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Nabvar/Navbar';
import Home from './Components/Home/Home';
import Scholarship from './Data/Scholarship';
import ScholarshipCard from './Components/ScholarshipCard/ScholarshipCard';
import { FiSearch } from 'react-icons/fi';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Scholarship/>}  />

          {/* <Route path="/scholarships" element={<Scholarships />}  */}
          {/* Add routes for Contact Us, Docs, and Scholarship Detail */}
        </Routes>

        {/* <ScholarshipCard  title={"mysy"} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpVGxXp6iXBa4B_-6OB7kRoqzinVgHI1Gc1r3WX-EUw&s'}/> */}

        
      </div>
    </Router>
  );
};



export default App;
