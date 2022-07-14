import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';

const WeightLossTwo = ({saturn_long_choice,Set_minor_data,assessment_type}) => {
  const [disp,Set_disp] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      Set_disp(false)
    }, 3000);
  }, [])

  console.log(assessment_type,'ass type')
  return (
    <>
        <div className={`${assessment_type == '6 mins' ? "progress-bar-saturn-step" : "hide-overlay-screen"}`}>
          <ProgressBarComp progress_step="66"
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-4.png?v=1655109040"
          text="My weight management"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
            Your metabolism is highly responsive to your daily routine and adjusts accordingly
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Is anyone in your family overweight/Obese?</h5>
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