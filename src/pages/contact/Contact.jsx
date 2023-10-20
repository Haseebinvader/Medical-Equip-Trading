import Contact_Data from "../../views/contact/Contact_Data"
import Location from "../../views/contact/Location"
import Footer from "../../views/home/Footer"
import Contact_Hero from "./Contact_Hero"

const Contact = () => {
    return (
        <>
            <Contact_Hero />
            <Contact_Data />
            <Location />
            <Footer />
        </>
    )
}

export default Contact