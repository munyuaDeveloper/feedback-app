import { Link } from "react-router-dom";
import Card from "../componets/shared/Card";

function AboutPage() {
    return (
        <Card>
            <h1>About this project</h1>
            <p>This is a react app to leave feedback about a product or a service.</p>
            <p>Version: 1.0.0</p>

            <p>
                <a><Link to='/'> Back to Home </Link></a>
            </p>
        </Card>
    )
}

export default AboutPage
