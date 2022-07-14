import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';

const WeightLossTwo = ({saturn_long_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="100"
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-4.png?v=1655109040"
          text="My weight management"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Have you used weight management products before?</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","weight_management_products","Yes")} noImage="true" choice={saturn_long_choice.weight_management.weight_management_products} value="Yes" text="Yes"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","weight_management_products", "No")} noImage="true" choice={saturn_long_choice.weight_management.weight_management_products} value="No"  text="No"/>
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
        <ProceedTemplate text="Proceed" choice={"appointment"} backLink="weight-management-11" conditionMet="true"/>
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

export default WeightLossTwo