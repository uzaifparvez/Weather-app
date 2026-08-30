import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css"

export default function InfoBox({info}) {
    const INIT_URL =
"https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"  

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