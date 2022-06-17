// import assessmentImage from '../../images/assessment.png'
// import ChoiceCard from '.././ChoiceCard';
// import ProceedTemplate from '.././ProceedTemplate';
// import { useState, useEffect } from 'react';
// import ImageCard from '../ImageCard';

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
//           Eating clean at regular intervals can help you notice changes in your weight management journey
//         </div>
//         <div className="choice-container">
//             <div className='assessment-image'>
//                 <ImageCard/>
//             </div>
//             <div className='assessment'>
//               <h5>May I know your water intake per day in litres?</h5>
//               <ChoiceCard 
//                 clickHandler={() => Set_minor_data("weight_management","water_intake","1-2 litres")} noImage="true" choice={saturn_long_choice.weight_management.water_intake} value="1-2 litres" text="1-2 litres"/>
//               <ChoiceCard 
//                 clickHandler={() => Set_minor_data("weight_management","water_intake", "2-3 litres")} noImage="true" choice={saturn_long_choice.weight_management.water_intake} value="2-3 litres"  text="2-3 litres"/>
//               <ChoiceCard 
//                 clickHandler={() => Set_minor_data("weight_management","water_intake","3-4 litres")} noImage="true" choice={saturn_long_choice.weight_management.water_intake} value="3-4 litres" text="3-4 litres"/>
//               <ChoiceCard 
//                 clickHandler={() => Set_minor_data("weight_management","water_intake", "4-5 litres")} noImage="true" choice={saturn_long_choice.weight_management.water_intake} value="4-5 litres"  text="4-5 litres"/>
//             </div>
//         </div>
//         <ProceedTemplate text="Proceed" choice={"weight-management-6"} backLink="weight-management-4" conditionMet="true"/>
//     </>
//   )
// }

// export default WeightLossTwo


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
          <ProgressBarComp progress_step="56" 
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
              <h5>Which type of food do you mostly consume?</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","food_type","Oily")} noImage="true" choice={saturn_long_choice.weight_management.food_type} value="Oily" text="Oily"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","food_type", "Junk")} noImage="true" choice={saturn_long_choice.weight_management.food_type} value="Junk"  text="Junk"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-6"} backLink="weight-management-4" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo