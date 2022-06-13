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
          <ProgressBarComp progress_step="100"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Did you use any weight management products before?</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","weight_management_products","Yes")} noImage="true" choice={saturn_long_choice.weight_management.weight_management_products} value="Yes" text="Yes"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","weight_management_products", "No")} noImage="true" choice={saturn_long_choice.weight_management.weight_management_products} value="No"  text="No"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"appointment"} backLink="weight-management-11" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo