import Searchbar from "../../components/Searchbar/Searchbar";
import Hero from "../../components/Hero/Hero";
import TopCharts from "../../components/TopCharts/TopCharts";

import "./Home.css"
import NewReleases from "../../components/Newreleases/NewReleases";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";

const Home = () => {
    return (
        <div className="home-page">
            <Searchbar />
            <div className="header">
                <Hero />
                <TopCharts />
            </div>
            <NewReleases />
            <MusicPlayer />
        </div>
    )
}

export default Home;