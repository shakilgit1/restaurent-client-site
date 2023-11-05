import Banner from "./Banner";
import TopFood from "./TopFood";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFood></TopFood>
            <h2 className="text-5xl text-center my-4">One More Section</h2>
            <h2 className="text-5xl text-center mb-8">Two More Section</h2>
        </div>
    );
};

export default Home;