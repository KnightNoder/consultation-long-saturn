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
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="100" 
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
              <h5>How often do you smoke or drink?</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","smoke_drink","Daily")} noImage="true" choice={saturn_long_choice.weight_management.smoke_drink} value="Daily" text="Daily"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","smoke_drink", "Occasionally")} noImage="true" choice={saturn_long_choice.weight_management.smoke_drink} value="Occasionally"  text="Occasionally"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","smoke_drink", "Never")} noImage="true" choice={saturn_long_choice.weight_management.smoke_drink} value="Never"  text="Never"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-10"} backLink="weight-management-8" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo