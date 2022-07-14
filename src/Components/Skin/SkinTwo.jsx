import ChoiceCard from '../ChoiceCard';
import ProceedTemplate from '../ProceedTemplate';
import { useState,useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';

const SkinTwo = ({saturn_long_choice,Set_minor_data,saturn_choice,
  Set_minor_short_data,assessment_type}) => {
  const [disp,Set_disp] = useState(true);
  useEffect(() => {
    window.scrollTo(0,0);
    setTimeout(() => {
      Set_disp(false)
    }, 5000);
  }, []);
  
  console.log(assessment_type == '6 mins','assessment_type');
  return (
    <>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Skin concerns are unique to each individual and one needs the right care to keep up with good skin health
        </div>
        <div className={`${assessment_type == '6 mins' ? "progress-bar-saturn-step" : "hide-overlay-screen"}`}>
          <ProgressBarComp progress_step="39.5"
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
              <h5>Describe your skin type</h5>
              <ChoiceCard show={disp} 
                clickHandler={() => {assessment_type == "6 mins" ? Set_minor_data("skin","skin_texture","Oily") : Set_minor_short_data("skin","skin_texture","Oily") ; 
              console.log('hello') }}
                 noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.skin.skin_texture : saturn_choice.skin.skin_texture} value="Oily" text="Oily"/>
              <ChoiceCard show={disp} 
                clickHandler={() => {assessment_type == "6 mins" ? Set_minor_data("skin","skin_texture","Dry") : Set_minor_short_data("skin","skin_texture","Dry")} }
                noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.skin.skin_texture : saturn_choice.skin.skin_texture}  value="Dry" text="Dry"/>
              <ChoiceCard show={disp} 
               clickHandler={() => {assessment_type == "6 mins" ? Set_minor_data("skin","skin_texture","Normal") : Set_minor_short_data("skin","skin_texture","Normal")} }
               noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.skin.skin_texture : saturn_choice.skin.skin_texture }  value="Normal" text="Normal "/>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={assessment_type == "6 mins" ? ("skin-2") : ("skin-15")} backLink="skin"/>
    </>
  )
}

export default SkinTwo