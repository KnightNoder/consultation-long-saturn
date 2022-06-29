import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import {useState, useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';


const SkinFour = ({saturn_long_choice,Set_minor_data,saturn_choice,Set_minor_short_data,assessment_type}) => {
  const [disp,Set_disp] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      Set_disp(false)
    }, 5000);
  }, [])

  console.log(saturn_choice.skin.skin_allergy_to,'allergy selected')

  return (
    <>
        <div className={`${assessment_type == '6 mins' ? "progress-bar-saturn-step" : "hide-overlay-screen"}`}>
          <ProgressBarComp progress_step="66.5"
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-4.png?v=1655109040"
          text="My Skin"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          It's important to listen to our bodies and understand allergies before beginning any treatment.
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Are you allergic to any of the ingredients? </h5>
              <ChoiceCard show={disp} 
                clickHandler={()=> assessment_type == "6 mins" ? Set_minor_data("skin","skin_allergy_to","Vitamin C") : Set_minor_short_data("skin","skin_allergy_to","Vitamin C")} 
                noImage="true"
                 choice={assessment_type == "6 mins" ? saturn_long_choice.skin.skin_allergy_to : saturn_choice.skin.skin_allergy_to } value="Vitamin C" text="Vitamin C"/>
              <ChoiceCard show={disp} 
                clickHandler={()=> assessment_type == "6 mins" ? Set_minor_data("skin","skin_allergy_to","Salicylic Acid") : Set_minor_short_data("skin","skin_allergy_to","Salicylic Acid")} 
                noImage="true" 
                choice={assessment_type == "6 mins" ? saturn_long_choice.skin.skin_allergy_to : saturn_choice.skin.skin_allergy_to } value="Salicylic Acid" text="Salicylic Acid"/>
              <ChoiceCard show={disp} 
               clickHandler={()=> assessment_type == "6 mins" ? Set_minor_data("skin","skin_allergy_to","Retinol") : Set_minor_short_data("skin","skin_allergy_to","Retinol")} 
               noImage="true" 
               choice={assessment_type == "6 mins" ? saturn_long_choice.skin.skin_allergy_to : saturn_choice.skin.skin_allergy_to } value="Retinol" text="Retinol"/>
              <ChoiceCard show={disp} 
               clickHandler={()=> assessment_type == "6 mins" ? Set_minor_data("skin","skin_allergy_to","Kojic Acid") : Set_minor_short_data("skin","skin_allergy_to","Kojic Acid")} 
               noImage="true" 
               choice={assessment_type == "6 mins" ? saturn_long_choice.skin.skin_allergy_to : saturn_choice.skin.skin_allergy_to } value="Kojic Acid" text="Kojic Acid"/>
               <ChoiceCard show={disp} 
               clickHandler={()=> assessment_type == "6 mins" ? Set_minor_data("skin","skin_allergy_to","None") : Set_minor_short_data("skin","skin_allergy_to","None")} 
               noImage="true" 
               choice={assessment_type == "6 mins" ? saturn_long_choice.skin.skin_allergy_to : saturn_choice.skin.skin_allergy_to } value="None" text="None"/>
            </div>
            
        </div>
        <ProceedTemplate text="Proceed" conditionMet="true" choice={ assessment_type == "6 mins" ? "skin-16" : "appointment"} backLink={assessment_type == "6 mins" ? "skin-14" : "skin-1"}/>
    </>
  )
}

export default SkinFour