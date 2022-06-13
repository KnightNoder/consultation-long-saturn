import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import {useState,useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';


const SkinOne = ({saturn_long_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
        <div className='progress-bar'>
          <ProgressBarComp progress_step="66.5"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Where are the wrinkles on your skin?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","wrinkles_location","Around the eyes")} noImage="true" choice={saturn_long_choice.skin.wrinkles_location} value="Around the eyes" text="Around the eyes"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","wrinkles_location","Around the nose")} noImage="true" choice={saturn_long_choice.skin.wrinkles_location} value="Around the nose"  text="Around the nose"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","wrinkles_location","Around the mouth")} noImage="true" choice={saturn_long_choice.skin.wrinkles_location} value="Around the mouth" text="Around the mouth"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","wrinkles_location","Around the lips")} noImage="true" choice={saturn_long_choice.skin.wrinkles_location} value="Around the lips" text="Around the lips"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","wrinkles_location","None of the above")} noImage="true" choice={saturn_long_choice.skin.wrinkles_location} value="None of the above" text="None of the above"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-8"} backLink="skin-6"/>
    </>
  )
}

export default SkinOne