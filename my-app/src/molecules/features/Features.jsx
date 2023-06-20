import "./Features.css"
import imgMobFeatures from "../../assets/Imgenes Comprimidas/mobiles.png"




function Features() {
  return (
    <>
    <div className="title">
        <h3>App Feature</h3>
        <h2>Basic Feature You Will Get When You Use</h2>
    </div>
    

    <div className="cardsContainer"></div>
    <div>
        <img className="imgFtr" src={imgMobFeatures} alt="" />
        <h2>Stay Home, And Prayer For Victim</h2> 
        <p>Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.
        Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and it can occur on its own, without a cough.</p>
        <button></button>
    </div>
    <div className="icons">

    </div>



    </>
  )
}

export default Features