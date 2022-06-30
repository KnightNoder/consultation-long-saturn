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
//         <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
//           Fact: Your metabolism is quite “adaptable.” It will adjust based on what you do in your daily life.
//         </div>
//         <div className="choice-container">
//             <div className='assessment-image'>
//                 <ImageCard/>
//             </div>
//             <div className='assessment'>
//               <h5>Does anyone in your family are verweight/obese?</h5>
//               <ChoiceCard 
//                 clickHandler={() => Set_minor_data("weight_management","overweight","Yes")} noImage="true" choice={saturn_long_choice.weight_management.overweight} value="Yes" text="Yes"/>
//               <ChoiceCard 
//                 clickHandler={() => Set_minor_data("weight_management","overweight", "No")} noImage="true" choice={saturn_long_choice.weight_management.overweight} value="No"  text="No"/>
//             </div>
//         </div>
//         <ProceedTemplate text="Proceed" choice={"weight-management-5"} backLink="weight-management-3" conditionMet="true"/>
//     </>
//   )
// }

// export default WeightLossTwo

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
          <ProgressBarComp progress_step="72.6"
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-4.png?v=1655109040"
          text="My weight management"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
            There's something special about outside food--tastier, love! Though homemade food is healthy :)
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Which type of food do you prefer?</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","food_preference","Homemade food")} noImage="true" choice={saturn_long_choice.weight_management.food_preference} value="Homemade food" text="Homemade food"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","food_preference", "Outside food")} noImage="true" choice={saturn_long_choice.weight_management.food_preference} value="Outside food"  text="Outside food"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-5"} backLink="weight-management-3" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo