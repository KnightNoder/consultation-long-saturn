import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';

const WeightLossTwo = ({saturn_long_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      Set_disp(false)
    }, 3000);
  }, [])

  return (
    <>
        <div className='progress-bar'>
          <ProgressBarComp progress_step="39.5"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Fact: Your metabolism is quite “adaptable.” It will adjust based on what you do in your daily life.  
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Does anyone in your family are overweight/obese?</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","overweight","Yes")} noImage="true" choice={saturn_long_choice.weight_management.overweight} value="Yes" text="Yes"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","overweight", "No")} noImage="true" choice={saturn_long_choice.weight_management.overweight} value="No"  text="No"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-3"} backLink="weight-management-1" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo