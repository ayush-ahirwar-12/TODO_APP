import { useState } from "react";
import Navbar from "../Components/Navbar";
import SlideBar from "../Components/SlideBar";
import TextContainer from "../Components/TextContainer";

const Home = () => {
        const [toggler, settoggler] = useState(false);
        console.log(toggler);
        

  return (
    <div className="w-full h-screen overflow-x-hidden relative p-2">
      <Navbar toggler={toggler} settoggler={settoggler}/>
      <SlideBar toggler={toggler} />
      <TextContainer/>
    </div>
  );
};

export default Home;
