import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css"

export default function InfoBox({info}) {
    const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1734463718301-d74b7e9e46dd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
  

    return (
        <div className="InfoBox">
            <div className="cardcontainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        {info.city}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        component={"span"}
                    >
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>
                            The weather is described as feels like <i>
                            {info.feelsLike}</i>&deg;C
                        </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}