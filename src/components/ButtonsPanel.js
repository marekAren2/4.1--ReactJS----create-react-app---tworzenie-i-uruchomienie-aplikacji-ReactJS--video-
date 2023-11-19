const ButtonsPanel = (props) => {
    console.log('z bbuttonsPanekl');
    return (
        <div className="buttonsPanel">
            {/* <button onClick={props.updateCounter} className="buttonAdd"> Add </button>    */}
            <button onClick={() => {props.updateCounter('add')}} className="buttonAdd"> Add </button>   
            <button onClick={() => {props.updateCounter('reset')}} className="buttonAdd"> Reset </button>   
            <button onClick={() => {props.updateCounter('set')} } className="buttonAdd"> Set </button>   
        </div>
    )
}
export default ButtonsPanel;
