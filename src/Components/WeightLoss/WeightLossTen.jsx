import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useEffect, useState } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';

const WeightLossThree = ({saturn_long_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(false);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <>

        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="72"
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-4.png?v=1655109040"
          text="My weight management"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>How many days do you exercise in a week?</h5>
              <h5>(no judgements here)</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","exercise_a_week","Don't work out at all")} noImage="true" choice={saturn_long_choice.weight_management.exercise_a_week} 
                value="Don't work out at all" text="Don't work out at all"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","exercise_a_week","Daily")} noImage="true" choice={saturn_long_choice.weight_management.exercise_a_week}  
                value="Daily" text="Daily"/>
              <ChoiceCard 
               clickHandler={() => Set_minor_data("weight_management","exercise_a_week","5-6 times a week")} noImage="true" choice={saturn_long_choice.weight_management.exercise_a_week}  
               value="5-6 times a week" text="5-6 times a week"/>
              <ChoiceCard 
               clickHandler={() => Set_minor_data("weight_management","exercise_a_week","1-2 times a week")} noImage="true" choice={saturn_long_choice.weight_management.exercise_a_week}  
               value="1-2 times a week" text="1-2 times a week"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-10"} backLink="weight-management-8" conditionMet="true"/>
    </>
  )
}

export default WeightLossThree