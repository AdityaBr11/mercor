import { useState } from "react";
import Bg from "./components/Bg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextMasking from "./components/TextMasking";
import Sidebar from "./components/Sidebar";

function App() {
  const [toggle, settoggle] = useState(false);
  console.log(toggle);
  return (
    <div className="">
      <Bg />
      <div className="absolute top-0 lg:h-screen bg-black/50 md:bg-transparent w-full flex flex-col justify-between">
        <Sidebar toggle={toggle} settoggle={settoggle} />
        <Navbar toggle={toggle} settoggle={settoggle} />
        <TextMasking />
        <Footer />
      </div>
    </div>
  );
}

export default App;
