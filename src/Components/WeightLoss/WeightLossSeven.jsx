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
          <ProgressBarComp progress_step="85.8" 
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-4.png?v=1655109040"
          text="My weight management"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
            A good diet and sufficient rest are crucial to maintaining healthy skin.
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>How many hours do you sleep?</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","sleeping_pattern","3-5 hours")} noImage="true" choice={saturn_long_choice.weight_management.sleeping_pattern} value="3-5 hours" text="3-5 hours"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","sleeping_pattern", "5-6 hours")} noImage="true" choice={saturn_long_choice.weight_management.sleeping_pattern} value="5-6 hours"  text="5-6 hours"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","sleeping_pattern","6-8 hours")} noImage="true" choice={saturn_long_choice.weight_management.sleeping_pattern} value="6-8 hours" text="6-8 hours"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","sleeping_pattern", "8-10 hours")} noImage="true" choice={saturn_long_choice.weight_management.sleeping_pattern} value="8-10 hours"  text="8-10 hours"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-7"} backLink="weight-management-5" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo