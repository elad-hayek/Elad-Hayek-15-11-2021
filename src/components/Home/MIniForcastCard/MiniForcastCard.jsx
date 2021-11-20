import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { weekday } from '../../../constants/general'
import './MiniForcastCard.css'

const getDayByDateTime = (dateTime) =>{
    const date = new Date(dateTime)
    return weekday[date.getDay()]
}

const MiniForcastCard = ({forcast}) =>{
    const theme = useSelector(state=>state.app.theme)

    return(
        <div className="mini-forcast-card"> 
            <Card bg={theme} variant={theme}>
                <Card.Body>
                    <Card.Title>{getDayByDateTime(forcast.Date)}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{forcast.Day.IconPhrase}</Card.Subtitle>
                    <Card.Text>
                        {forcast.Temperature.Minimum.Value} &#8451;
                            - 
                            {forcast.Temperature.Maximum.Value} &#8451;
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}
export default MiniForcastCard