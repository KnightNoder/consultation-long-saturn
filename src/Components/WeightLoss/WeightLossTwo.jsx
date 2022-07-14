import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';


const WeightLossTwo = ({saturn_long_choice,Set_minor_data,saturn_choice,Set_minor_short_data,assessment_type}) => {
  const [disp,Set_disp] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); 
    setTimeout(() => {
      Set_disp(false)
    }, 5000);
  }, [])

  return (
    <>
        <div className={`${assessment_type == "6 mins" ? "progress-bar-saturn-step" : "hide-overlay-screen"}`}>
          <ProgressBarComp progress_step="49" 
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-4.png?v=1655109040"
          text="My weight management"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Measuring your weight everyday helps you loose weight faster
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>How many times do you eat in a day? </h5>
              <h5>(including tea, coffee, fruits, salads, snacks)  </h5>
              <ChoiceCard 
                clickHandler={() => assessment_type == "6 mins" ? Set_minor_data("weight_management","meals_a_day","More than 6 times") : Set_minor_short_data("weight_management","meals_a_day","More than 6 times")} 
                noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.weight_management.meals_a_day : saturn_choice.weight_management.meals_a_day} value="More than 6 times" text="More than 6 times"/>
              <ChoiceCard 
                clickHandler={() => assessment_type == "6 mins" ? Set_minor_data("weight_management","meals_a_day", "4-6 times"): Set_minor_short_data("weight_management","meals_a_day", "4-6 times") } 
                noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.weight_management.meals_a_day : saturn_choice.weight_management.meals_a_day} value="4-6 times"  text="4-6 times"/>
              <ChoiceCard 
               clickHandler={() => assessment_type == "6 mins" ? Set_minor_data("weight_management","meals_a_day","3 times") : Set_minor_short_data("weight_management","meals_a_day","3 times") } 
               noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.weight_management.meals_a_day : saturn_choice.weight_management.meals_a_day} value="3 times" text="3 times"/>
              <ChoiceCard 
               clickHandler={() => assessment_type == "6 mins" ? Set_minor_data("weight_management","meals_a_day", "Less than 3 times") : Set_minor_short_data("weight_management","meals_a_day", "Less than 3 times")}
                noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.weight_management.meals_a_day : saturn_choice.weight_management.meals_a_day} value="Less than 3 times" text="Less than 3 times"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={`${(assessment_type == "6 mins") ? "weight-management-2" : "weight-management-9"}`} backLink="weight-management" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo