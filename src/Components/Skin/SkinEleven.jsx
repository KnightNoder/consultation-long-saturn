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
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="66.5"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Which type of food do u mostly consume?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","food_type","Oily")} noImage="true" choice={saturn_long_choice.skin.food_type} value="Oily" text="Oily"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","food_type","Junk")} noImage="true" choice={saturn_long_choice.skin.food_type} value="Junk"  text="Junk"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-11"} backLink="skin-9"/>
    </>
  )
}

export default SkinOne