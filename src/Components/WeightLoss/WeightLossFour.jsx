// import assessmentImage from '../../images/assessment.png'
// import CheckBoxCard from '.././CheckBoxCard';
// import ProceedTemplate from '.././ProceedTemplate';
// import '../../css/WeightLossFour.css';
// import { useEffect, useState } from 'react';
// import ImageCard from '../ImageCard'
// import ProgressBarComp from '../../Components/ProgressBarComp';


// const WeightLossFour = ({saturn_long_choice,Set_minor_data,Set_weight_data,Set_others_input}) => {
//   const [disp,Set_disp] = useState(true);
  
//   const changeHandler = (name,value) =>{
//       if(name == 'No such problems'){
//         name = 'No_such_problems'
//       }
//       if(name == "No_such_problems" && value == false){
//         Set_minor_data("weight_management","check_list",{
//           "Cholestrol": false,
//           "Thyroid":false,
//           "Heart":false,
//           "Diabetes": false,
//           "Kidney":false,
//           "No_such_problems": true,
//           "Others": false,
//           "Others_input":""
//         })
//       } else {
//         Set_weight_data(name,value)
//       }
//   }

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     setTimeout(() => {
//       Set_disp(false)
//     }, 3000);
//   }, [])

//   return (
//     <>
//         <div className='progress-bar'>
//           <ProgressBarComp progress_step="34"/>
//         </div>
//         <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
//           Some medical conditions do require a special plan. Help us find you a healthy way to manage your weight
//         </div>
//         <div className="choice-container">
//             <div className='assessment-image'>
//                 <ImageCard/>
//             </div>
//             <div className='assessment'>
//               <h5>Do you have any pre-existing problems? </h5>
//               <div className={` error-text-checkbox ${!!Object.values(saturn_long_choice.weight_management.check_list).filter((x)=> x).length ? "not-visible": "visible"}`}>Please answer the question to proceed</div>
//               <div className='scroll-div'>
//                 <CheckBoxCard name="Cholestrol" value={saturn_long_choice.weight_management.check_list.Cholestrol} onChange={(name,value)=>changeHandler(name,value)}  text="Cholestrol"/>
//                 <CheckBoxCard name="Thyroid" value={saturn_long_choice.weight_management.check_list.Thyroid} onChange={(name,value)=>changeHandler(name,value)} text="Thyroid"/>
//                 <CheckBoxCard name="Heart" onChange={(name,value)=>changeHandler(name,value)} value={saturn_long_choice.weight_management.check_list.Heart} text="Heart"/>
//                 <CheckBoxCard name="Diabetes" onChange={(name,value)=>changeHandler(name,value)} value={saturn_long_choice.weight_management.check_list.Diabetes} text="Diabetes"/>
//                 <CheckBoxCard name="Kidney" onChange={(name,value)=>changeHandler(name,value)} value={saturn_long_choice.weight_management.check_list.Kidney} text="Kidney"/>
//                 <CheckBoxCard name="No_such_problems" onChange={(name,value)=>changeHandler(name,value)} value={saturn_long_choice.weight_management.check_list.No_such_problems} text="No such problems"/>
//                 {/* <div className='optional-input' style={{display:"flex", justifyContent: "center",
//                   alignItems:"center"
//                 }}> */}
//                 <CheckBoxCard name="Others" onChange={(name,value)=>changeHandler(name,value)} value={saturn_long_choice.weight_management.check_list.Others} text="Others"/>
//                 <input className='input' name="Others_input" value={saturn_long_choice.weight_management.check_list.Others_input} disabled={saturn_long_choice.weight_management.check_list.Others != true}
//                 onChange={(e)=>Set_others_input(e.target.name,e.target.value)} style={{height:"65px"}} type="text" placeholder='Specify the issue' autoComplete='off' />
//                 {/* </div> */}
//               </div>
//             </div>
//         </div>
//         <ProceedTemplate text="Proceed" choice={"weight-management-4"} vibrateText={()=>{}} backLink="weight-management-2" conditionMet={!!Object.values(saturn_long_choice.weight_management.check_list).filter((x)=> x).length}/>
//     </>
//   )
// }

// export default WeightLossFour


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
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          We would love to get to know you better! Can you tell us more about your lifestyle?
        </div>
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="66"
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
              <h5>May I know your water intake per day in litres?</h5>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","water_intake","1-2 litres")} noImage="true" choice={saturn_long_choice.weight_management.water_intake} value="1-2 litres" text="1-2 litres"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","water_intake", "2-3 litres")} noImage="true" choice={saturn_long_choice.weight_management.water_intake} value="2-3 litres"  text="2-3 litres"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","water_intake","3-4 litres")} noImage="true" choice={saturn_long_choice.weight_management.water_intake} value="3-4 litres" text="3-4 litres"/>
              <ChoiceCard 
                clickHandler={() => Set_minor_data("weight_management","water_intake", "4-5 litres")} noImage="true" choice={saturn_long_choice.weight_management.water_intake} value="4-5 litres"  text="4-5 litres"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weight-management-4"} backLink="weight-management-2" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo