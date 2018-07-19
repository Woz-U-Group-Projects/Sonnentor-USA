import { React } from "react";
import { Header } from "../components/Header";

class App extends Component {

    render() {
        return (
            <Text>
                Sonnentor was founded in 1988 by Johannes Gutmann. 
                 </Text>
        )
    }

}

const About = () => <Header title="About" />

export default About;