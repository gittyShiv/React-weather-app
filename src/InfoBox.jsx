import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Fire from '@mui/icons-material/LocalFireDepartment';
import Cold from '@mui/icons-material/AcUnit';
import Rain from '@mui/icons-material/Thunderstorm';
import './Info.css'
export default function InfoBox({info}){
  let imgURL;
  let Emoji;
    if(info.temp<16) imgURL = "https://images.unsplash.com/photo-1641672222794-536ad524a929?" ,Emoji = Cold;
    else if(info.humidity>80) imgURL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?",Emoji = Rain; 
    else imgURL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?", Emoji = Fire;
    return (
        <div className="InfoBox">
           <h1>Weather Heading-{info.description}</h1>
            <div className='parent'>
    <Card sx={{ maxWidth: 345 }} className='Wcard'>
      <CardMedia className='weather-img'
        sx={{ height: 140 }}
        image={imgURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{info.cityName}</b><Emoji sx={{ fontSize: 40 }}/>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Feels like:{info.feelsLike}&deg;C</div>
            <div>Temp:{info.temp}&deg;C</div>
            <div>TempMin:{info.tempMin}&deg;C</div>
            <div>TempMax:{info.tempMax}&deg;C</div>
            <div>Description:{info.description}</div>
            <div>Humidity:{info.humidity}</div>
        </Typography>
      </CardContent>
    </Card>
            </div>


        </div>
    )
}