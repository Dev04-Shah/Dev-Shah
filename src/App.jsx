/* eslint-disable react/no-unescaped-entities */

import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Loader from "./components/Loader"; // Import the Loader component
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading state for demonstration (you can remove this in a real app)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1950); // Loader for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Aside />
      <div className="main-content">
        <Navbar />
        {loading && <Loader loading={loading} />
      } {/* Show loader if loading is true */}
        {!loading && (
          <section
            style={{
              scrollBehavior: "smooth",
            }}
          >
            <Outlet />
          </section>
        )}
      </div>
    </>
  );
}

export default App;
