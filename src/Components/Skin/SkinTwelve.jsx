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
              <h5>Explain your eating culture</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","eating_culture","Vegetarian with milk products included in diet")} noImage="true" choice={saturn_long_choice.skin.eating_culture} value="Vegetarian with milk products included in diet" text="Vegetarian with milk products included in diet"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","eating_culture","Vegetarian without milk products in diet")} noImage="true" choice={saturn_long_choice.skin.eating_culture} value="Vegetarian without milk products in diet"  text="Vegetarian without milk products in diet"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","eating_culture","Non-vegetarian")} noImage="true" choice={saturn_long_choice.skin.eating_culture} value="Non-vegetarian" text="Non-vegetarian"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-12"} backLink="skin-10"/>
    </>
  )
}

export default SkinOne