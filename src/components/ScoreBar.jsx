import { Typography } from "@mui/material"


const ScoreBar = ({scores}) => {
  return (
    <Typography 
    variant="h2" 
    component="span"
    sx={{textAlign: "center", width: "100%", display: "block"}}
    >
        {scores.cross} - {scores.circle}
    </Typography>
  )
}

export default ScoreBar