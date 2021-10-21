import { makeStyles } from "@material-ui/styles";
import Banner from "../images/banner.jpeg"

const banner = makeStyles({
    container: {
        height: 700,
        backgroundColor: 'pink',
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        margin: "100px 0 0",
        padding: "223px 0 0",
    }
})

const styles = {
    banner
}

export default styles;