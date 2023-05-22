import {Component} from'react'
import style from "../appstore/index.module.css"
class Appstore extends Component{
    render(){
        const {applist}=this.props
        const {imageUrl,appName}=applist
        return (
        <div className={style.applist}>
            <img className={style.image} src={imageUrl} alt={appName}/>
            <h3 className={style.name}>{appName}</h3>
        </div>
        )
    }
}

export default Appstore;