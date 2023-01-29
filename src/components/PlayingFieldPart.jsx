import { Grid } from '@mui/material'
import cross from '../img/cross.png'
import circle from '../img/circle.png'
import { useEffect, useState } from 'react'

const PlayingFieldPart = ({clickCount, setClickCount, position, setSteps, clickPermission, clearImg, setClearImg}) => {

    const [isClick, setIsClick] = useState(false);
    const [img, setImg] = useState();

    useEffect(() => {
        setImg(undefined);
        setIsClick(false);
        setClearImg(false);
    }, [clearImg === true]);

    const click = () => {
        if (isClick || !clickPermission) return;
        setImg(clickCount % 2 === 0 ? cross : circle);
        setClickCount(clickCount + 1);
        setIsClick(true);
        const element = clickCount % 2 === 0 ? "x" : "o";
        const x = position[0];
        const y = position[1];
        setSteps(prev => prev.map((arr, i) => arr.map( (el, j) => i === x && j === y ? element : el)))
    }

    return (
        <Grid 
        item 
        xs={4} 
        sx={{
            border: "1px solid black",
            height: "133px",
            backgroundImage: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
        onClick={click}
        >
            <img src={img}/>
        </Grid>
    )
}

export default PlayingFieldPart