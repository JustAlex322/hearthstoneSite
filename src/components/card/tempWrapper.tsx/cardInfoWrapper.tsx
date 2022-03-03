import { useAppSelector } from "../../../redux/hooks/hooks"
import CardInfoContainer from "../CardInfoContainer"


const CardInfoWrapper : React.FC = () => {

    const cardsArray = useAppSelector(state => state.main.cardsInfo)
    return (
        <div>
            <CardInfoContainer cardsArray={cardsArray}/>
        </div>
    )
}

export default CardInfoWrapper