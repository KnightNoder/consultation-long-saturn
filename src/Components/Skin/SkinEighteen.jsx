import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import {useState,useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';


const SkinOne = ({saturn_long_choice,Set_minor_data,assessment_type}) => {
  const [disp,Set_disp] = useState(false);
  const [vibrate_allergic_products,Set_vibrate_allergic_products] = useState(false);
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  console.log(saturn_long_choice.skin.skin_products,'skin products choice');
  return (
    <>
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="100"
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-4.png?v=1655109040"
          text="My Skin"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Have you ever had side effects from skin products?</h5>
              <div className='scroll-div-two'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","skin_products","Yes")} noImage="true" choice={saturn_long_choice.skin.skin_products} value="Yes" text="Yes"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","skin_products","No")} noImage="true" choice={saturn_long_choice.skin.skin_products} value="No"  text="No"/>
              </div>
              { saturn_long_choice.skin.skin_products == "Yes" ? <InputCard heading="" placeholder="List all those products here" value={saturn_long_choice.user_info.allergic_skin_products} 
              onchange={(e) => {
                // assessment_type =="30 sec" ? 
                // Set_minor_short_data("user_info","email",e.target.value): Set_minor_data("user_info","email",e.target.value); 
                // SetVibrateEmail(false)
              }} 
              //  requiredErrorText="Please provide valid email to proceed" required="*" vibrate={vibrate_email}
               /> : null}
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"appointment"} backLink="skin-16"/>
    </>
  )
}

const InputCard = ({heading,placeholder,requiredErrorText,value,vibrate, required,onchange,inputMode,validity,numberCheck}) => {
  return (
    <>
      <h3 style={{}}>{heading}
        <div style={{display:"inline-block",fontSize:"20px",color:"#EA2C2C", marginLeft:"3px"}} className=''>{required}
        </div>
      </h3>
      <input className='input' onChange={onchange} value={value} inputMode={inputMode}
      type="text" placeholder={placeholder} onKeyDown={numberCheck} style={{height:"80px"}} /> 
      <span style={ (vibrate && !validity) ? {visibility:"visible"} : {visibility:"hidden"}} className='error-text' id="two">
        {requiredErrorText}
      </span>
    </>
  )
}

export default SkinOne