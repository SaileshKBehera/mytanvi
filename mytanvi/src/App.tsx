import { useState } from "react";
import styles from "./styles/App.module.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen} />
      <main className={styles.content}>
       
        <Cards></Cards>
      
      </main>
    </div>
  );
};

export default App;
