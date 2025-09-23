function NewButton(props){
    return(
    <button className={props.btnclass} onClick={props.onClick}>{props.btntitle || props.children}</button>

    );
}
export default NewButton;
