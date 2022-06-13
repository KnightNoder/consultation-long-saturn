import assessmentImage from '../../images/assessment.png'
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
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="91"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
            Listen to our bodies and understand them before starting any treatment  
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Since when did you observe you are not in control of your weight?</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","not_in_control","Days")} noImage="true" choice={saturn_long_choice.weight_management.not_in_control} value="Days" text="Days"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","not_in_control", "Months")} noImage="true" choice={saturn_long_choice.weight_management.not_in_control} value="Months"  text="Months"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","not_in_control", "Years")} noImage="true" choice={saturn_long_choice.weight_management.not_in_control} value="Years"  text="Years"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-12"} backLink="weight-management-10" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo