const Overlay = (props) => {


    return (
        <div className={props.isOverlay ? 'backdrop active-backdrop' : 'backdrop'}></div>

    )
}

export default Overlay;