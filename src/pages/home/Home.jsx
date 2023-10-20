import Consumeable from "../../views/home/Consumeable"
import Equip2 from "../../views/home/Equip2"
import Equipmens from "../../views/home/Equipments"
import Footer from "../../views/home/Footer"
import Health from "../../views/home/Health"
import Hero from "../../views/home/Hero"
import IncrementCounter from "../../views/home/IncrementCounter"
import './styles.css'
const Home = () => {
    return (
        <>
            <Hero />
            <Equipmens />
            <Health />
            <Consumeable />
            <Equip2 />
            <IncrementCounter propValues={{ targetValue: 460, anotherValue: 8, thirdValue: 54 }} />
            <Footer />
        </>
    )
}

export default Home