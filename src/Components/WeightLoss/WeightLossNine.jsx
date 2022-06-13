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
        <div className='progress-bar'>
          <ProgressBarComp progress_step="66"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Do you smoke or drink?</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","smoke_drink","Daily")} noImage="true" choice={saturn_long_choice.weight_management.smoke_drink} value="Daily" text="Daily"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","smoke_drink", "Occasionally")} noImage="true" choice={saturn_long_choice.weight_management.smoke_drink} value="Occasionally"  text="Occasionally"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","smoke_drink", "Never")} noImage="true" choice={saturn_long_choice.weight_management.smoke_drink} value="Never"  text="Never"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-9"} backLink="weight-management-7" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo