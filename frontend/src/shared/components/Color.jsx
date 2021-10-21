import { makeStyles } from "@material-ui/styles";

const btn = makeStyles({
    pink: {
        backgroundColor: 'pink',
        color: 'purple'
    }
})

const input = makeStyles({
    name: {
        backgroundColor:'orange'
    }
})

const styles = {
    btn,
    input
}

export default styles;