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
          <ProgressBarComp progress_step="96"
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-4.png?v=1655109040"
          text="My weight management"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
            Let's not tell your boss how many hours you worked yesterday.
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>How many hours do you work in a day?  </h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","work_style","< 9 hours")} noImage="true" choice={saturn_long_choice.weight_management.work_style} value="< 9 hours" text="< 9 hours"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","work_style", "9-10 hours")} noImage="true" choice={saturn_long_choice.weight_management.work_style} value="9-10 hours"  text="9-10 hours"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","work_style","10-12 hours")} noImage="true" choice={saturn_long_choice.weight_management.work_style} value="10-12 hours" text="10-12 hours"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","work_style", "12 and above")} noImage="true" choice={saturn_long_choice.weight_management.work_style} value="12 and above"  text="12 and above"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-9"} backLink="weight-management-7" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo