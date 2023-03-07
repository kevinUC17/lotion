function Title(openSidebar, setOpenSidebar) {
    return  <div className="title">
        <ul className="top">
        <li><h1 className="lotion-title">Lotion</h1></li>
        <li><h1 className="title-bar"><button onClick={()=>setOpenSidebar(!openSidebar)}>&#9776;</button></h1></li>
        <li><h1 className="title-description"><p>Like Norton but im dying on the inside</p></h1></li>

        </ul>
    </div>

}

export default Title;