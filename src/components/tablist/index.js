import {Component} from'react'
import style from '../tablist/index.module.css'

class Tablist extends Component{
  render(){
    const {tablist,setactivetab}=this.props
    const {displayText,tabId}=tablist
    const onclickfunc = ()=>{
        setactivetab(tabId)
    }
    return (
        <button onClick={onclickfunc} className={style.h2}>{displayText}</button>
      
    )
  }
}

export default Tablist;