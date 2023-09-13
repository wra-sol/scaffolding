import { Card, CardActions, CardContent, Typography, Button } from "@mui/material"
import { useTheme } from "../themes/ThemeContext"

const Placeholder = () => {
    const { theme, toggleTheme } = useTheme();
    console.log(theme)
    return (
        <Card sx={{m: 2}}>
            <CardActions>
                <Button onClick={() => toggleTheme()}>
                    TOGGLE THEME
                </Button>
            </CardActions>
            <CardContent>
                <Typography variant='h1' color="primary">Hello H1</Typography>
                <Typography variant='h2' color="secondary">Hello H2</Typography>
                <Typography variant='h3'>Hello H3</Typography>
                <Typography variant='h4'>Hello H4</Typography>
                <Typography variant='h5'>Hello H5</Typography>
                <Typography variant='h6'>Hello H6</Typography>
                <Typography variant='subtitle1'>Hello Sub1</Typography>
                <Typography variant='subtitle2'>Hello Sub2</Typography>
                <Typography variant='body1'>Hello Body1</Typography>
                <Typography variant='body2'>Hello Body2</Typography>
                <Typography variant='button'>Hello Button</Typography><br></br>
                <Typography variant='caption'>Hello Caption</Typography><br></br>
                <Typography variant='overline'>Hello Overline</Typography><br></br>
            </CardContent>
        </Card>
    )
}

export default Placeholder;