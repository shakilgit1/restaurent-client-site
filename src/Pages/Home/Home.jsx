import Banner from "./Banner";
import Previews from "./Previews";
import Tasty from "./Tasty";
import TopFood from "./TopFood";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFood></TopFood>
            <h2 className="text-5xl text-center my-4">Featured Foods</h2>
            <h2 className="text-2xl text-center my-4">Elevate your dining experience at PIZZAN! Our websites inviting banner welcomes <br /> you with a tantalizing glimpse of our exquisite dishes and warm ambiance.</h2>
            <div>
            <Previews></Previews>
            </div>
            <h2 className="text-5xl text-center mb-8">You may also like</h2>
            <h2 className="text-2xl text-center my-4">Elevate your dining experience at PIZZAN! Our websites inviting banner welcomes <br /> you with a tantalizing glimpse of our exquisite dishes and warm ambiance.</h2>
            <div>
                <Tasty></Tasty>
            </div>
        </div>
    );
};

export default Home;