function NewButton(props){
    return(
    <button className={props.btnclass}>{props.btntitle || props.children}</button>

    );
}
export default NewButton;
