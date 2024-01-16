function MenuItem({image, name, content, price}) {
    return ( 
        <div className="menuItem">
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h2 style={{marginBottom:'10px'}}>{name}</h2>
            <h6 style={{marginTop:'0px'}}>{content}</h6>
            <p><i style={{color:'red'}}>{price} TL</i></p>
        </div>
     );
}

export default MenuItem;