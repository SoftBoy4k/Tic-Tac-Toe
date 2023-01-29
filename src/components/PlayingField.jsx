import { Grid } from "@mui/material"
import PlayingFieldPart from "./PlayingFieldPart"


const PlayingField = ({steps, clickPermission, setSteps, clickCount, setClickCount, clearImg, setClearImg}) => {
    return (
        <Grid
        container
        sx={{
            width: "399px",
            height: "399px",
            margin: "5% auto",
        }}
        >
            {steps.map( (arr, i) => arr.map( (_, j) => <PlayingFieldPart key={`${i}${j}`} clearImg={clearImg} setClearImg={setClearImg} clickPermission={clickPermission} clickCount={clickCount} setClickCount={setClickCount} position={[i, j]} setSteps={setSteps}/> ) )}
        </Grid>
    )
}

export default PlayingField