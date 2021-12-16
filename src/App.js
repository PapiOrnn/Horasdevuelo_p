import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import "./index.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import plan1 from "./assets/7.png";
import plan2 from "./assets/8.png";
import plan3 from "./assets/9.png";
import plan4 from "./assets/10.png";


function App() {
  return (
    <div className="px-4 md:px-10">
      <Header />
      <Banner />
      <div className="flex flex-col md:flex-row  ">
        <Main />
        <Sidebar />
      </div>
      <div className="w-full mt-10 ">
        <h2 className="text-2xl font-bold text-gray-800  text-center  ">
          Proyecciòn
        </h2>
        <article
          className="md:my-10 text-center flex-col md:flex-row md:gap-y-10 flex justify-center items-center"
          id="plan-ventas"
        >
          <div className="md:w-1/2">
          <div className="my-4 mx-auto md:w-1/2">
            <img src={plan1} alt="" className="" />
    <p> Albert Huarcaya </p>
          </div>
            
          </div>

          <div className="my-4 mx-auto md:w-1/2">
            <img src={plan2} alt="" className="" />
          </div>
        </article>

        <article
          className="md:my-10 text-center flex-col md:flex-row md:gap-y-10 flex justify-center items-center">
          <div className="md:w-1/2">
          <div className="my-4 mx-auto md:w-1/2">
            <img src={plan3} alt="" className="" />
          </div>
            
          </div>

          <div className="my-4 mx-auto md:w-1/2">
            <img src={plan4} alt="" className="" />
          </div>
        </article>


      </div>

      <Footer />
    </div>
  );
}

export default App;
