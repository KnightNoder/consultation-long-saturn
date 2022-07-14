// import assessmentImage from '../../images/assessment.png'
// import ChoiceCard from '.././ChoiceCard';
// import ProceedTemplate from '.././ProceedTemplate';
// import { useState, useEffect } from 'react';
// import ImageCard from '../ImageCard';
// import ProgressBarComp from '../../Components/ProgressBarComp';


// const WeightLossTwo = ({saturn_long_choice,Set_minor_data}) => {
//   const [disp,Set_disp] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     setTimeout(() => {
//       Set_disp(false)
//     }, 3000);
//   }, [])

//   return (
//     <>

//         <div className='progress-bar-saturn-step'>
//           <ProgressBarComp progress_step="100"
//           img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-1.png?v=1655109040"
//           img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-2.png?v=1655109040"
//           img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-3.png?v=1655109040"
//           img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-4.png?v=1655109040"
//           text="My weight management"/>
//         </div>
//         <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
//           Some medical conditions do require a special plan. Help us find you a healthy way to manage your weight.
//         </div>
//         <div className="choice-container">
//             <div className='assessment-image'>
//                 <ImageCard/>
//             </div>
//             <div className='assessment'>
//               <h5>Do you have any past allergy reactions to medicines?</h5>
//               <ChoiceCard 
//                 clickHandler={() => Set_minor_data("weight_management","past_allergy","Yes")} noImage="true" choice={saturn_long_choice.weight_management.past_allergy} value="Yes" text="Yes"/>
//               <ChoiceCard 
//                 clickHandler={() => Set_minor_data("weight_management","past_allergy", "No")} noImage="true" choice={saturn_long_choice.weight_management.past_allergy} value="No"  text="No"/>
//             </div>
//         </div>
//         <ProceedTemplate text="Proceed" choice={"weight-management-11"} backLink="weight-management-9" conditionMet="true"/>
//     </>
//   )
// }

// export default WeightLossTwo

import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useEffect, useState } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';

const WeightLossThree = ({saturn_long_choice,Set_minor_data,saturn_choice,Set_minor_short_data,assessment_type}) => {
  const [disp,Set_disp] = useState(false);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <>

        <div className={`${assessment_type == "6 mins" ? "progress-bar-saturn-step" : "hide-overlay-screen"}`}>
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
              <h5>How often do you exercise?</h5>
              <h5>(no judgements here)</h5>
              <ChoiceCard 
                clickHandler={() => assessment_type == "6 mins" ? Set_minor_data("weight_management","exercise_a_week","Don't work out at all") : Set_minor_short_data("weight_management","exercise_a_week","Don't work out at all")} 
                noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.weight_management.exercise_a_week :  saturn_choice.weight_management.exercise_a_week} 
                value="Don't work out at all" text="Don't work out at all"/>
              <ChoiceCard 
                clickHandler={() => assessment_type == "6 mins" ? Set_minor_data("weight_management","exercise_a_week","Daily") : Set_minor_short_data("weight_management","exercise_a_week","Daily")} 
                noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.weight_management.exercise_a_week :  saturn_choice.weight_management.exercise_a_week}  
                value="Daily" text="Daily"/>
              <ChoiceCard 
               clickHandler={() => assessment_type == "6 mins" ? Set_minor_data("weight_management","exercise_a_week","5-6 times a week") : Set_minor_short_data("weight_management","exercise_a_week","5-6 times a week")} 
               noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.weight_management.exercise_a_week :  saturn_choice.weight_management.exercise_a_week}  
               value="5-6 times a week" text="5-6 times a week"/>
              <ChoiceCard 
               clickHandler={() => assessment_type == "6 mins" ? Set_minor_data("weight_management","exercise_a_week","1-2 times a week") : Set_minor_short_data("weight_management","exercise_a_week","1-2 times a week")} 
               noImage="true" choice={assessment_type == "6 mins" ? saturn_long_choice.weight_management.exercise_a_week :  saturn_choice.weight_management.exercise_a_week}  
               value="1-2 times a week" text="1-2 times a week"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={`${assessment_type ==  "6 mins" ? "weight-management-11" : "weight-management-13"}`} backLink={`${assessment_type == "6 min" ? "weight-management-9" : "weight-management-1"}`} conditionMet="true"/>
    </>
  )
}

export default WeightLossThree