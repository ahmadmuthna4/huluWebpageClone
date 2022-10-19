import './card.css'

const Card=function(props){
    return(
        <div className={props.class}>
            <div className="cover-grad"></div>
            <div className="cover-text">
                <div className="sub-title">Past & Current Seasons</div>
                <h3>TV Shows</h3>
            </div>
        </div>
    )
}
export default Card