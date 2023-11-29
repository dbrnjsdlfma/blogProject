import React from "react"
import '../css/SkillItem.css'
function SkillItem({data}) {
    return (
        <>
            {data.map((item, index) => {
                console.log(item)
                return (
                    <>
                    <div key={index} className="skillItem"
                    style={{backgroundColor : `${item.backColor}` , color : `${item.color}`}}>
                        <img src={item.url}></img>
                        <span>{item.title}</span>
                    </div>
                    </>
                )
            })}
        </>
    )
}

export default SkillItem