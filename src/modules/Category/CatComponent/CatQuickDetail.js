import { useEffect, useState } from "react"
import env, { normalPriceCount, rxFindCount } from "../../../env"

function CatQuickDetail(props){
    const cat = props.cat
    
    return(
    <div className="sub-order-table">
        <div className="sub-row">
            <div className="sub-avatar">
            <div className="sub-avatar-container">
                <img src="/img/lenz01.jpg"
                alt={"sku.sku"}/>
                <div className="sub-info">
                <p className="sub-name">{cat.title}</p>
                </div>
            </div>
            </div>
        </div>
        <div className="sub-row">
            <p dangerouslySetInnerHTML={{__html:cat.description}}></p>
        </div>
    </div>
    )
}
export default CatQuickDetail