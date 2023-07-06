import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/contacts/Contact";
import Dashboard from "./components/Maps/Dashboard";
const queryClient = new QueryClient();
function App() {

  return (
    <div className="App">
  
      <h1 style={{textAlign:"center"}}> Taiyo.AI Assignment</h1>
      <Routes>
      <Route path="/" element={<Home />}>
      
  <Route path="map" element={<QueryClientProvider client={queryClient}>
  <Dashboard />
</QueryClientProvider>} />
<Route path="/" element={<Contact/>} />
      <Route path="contact" element={<Contact/>} />
       
       </Route>
      </Routes>
    </div>
  );
}

export default App;