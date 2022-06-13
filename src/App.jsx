import './App.css';
import React from 'react'
import { useEffect,useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Appointment from './Components/Appointment';
import Recommendation from './Components/Recommendation';
import Book from './Components/Book'
import Callback from './Components/Callback';
import ChoicePage from './Components/ChoicePage'
import LandingPage  from './Components/LandingPage';
import HairOne from './Components/Hair/HairOne';
import HairTwo from './Components/Hair/HairTwo';
import HairThree from './Components/Hair/HairThree';
import SkinOne from './Components/Skin/SkinOne';
import SkinTwo from './Components/Skin/SkinTwo';
import SkinThree from './Components/Skin/SkinThree';
import SkinFour from './Components/Skin/SkinFour';
import SkinFive from './Components/Skin/SkinFive';
import SkinSix from './Components/Skin/SkinSix';
import SkinSeven from './Components/Skin/SkinSeven';
import SkinEight from './Components/Skin/SkinEight';
import SkinNine from './Components/Skin/SkinNine';
import SkinTen from './Components/Skin/SkinTen';
import SkinEleven from './Components/Skin/SkinEleven';
import SkinTwelve from './Components/Skin/SkinTwelve';
import SkinThirteen from './Components/Skin/SkinThirteen';
import SkinFourteen from './Components/Skin/SkinFourteen';
import SkinFifteen from './Components/Skin/SkinFifteen';
import SkinSixteen from './Components/Skin/SkinSixteen';
import SkinSeventeen from './Components/Skin/SkinSeventeen';
import SkinEighteen from './Components/Skin/SkinEighteen';
import ProgressBar from './Components/ProgressBarComp';
import PerformanceOne from './Components/Performance/PerformanceOne';
import PerformanceTwo from './Components/Performance/PerformanceTwo'
import PerformanceThree from './Components/Performance/PerformanceThree';
import PerformanceFour from './Components/Performance/PerformanceFour';
import PerformanceFive from './Components/Performance/PerformanceFive';
import BeardOne from './Components/Beard/BeardOne';
import BeardTwo from './Components/Beard/BeardTwo';
import BeardThree from './Components/Beard/BeardThree';
import WeightLossOne from './Components/WeightLoss/WeightLossOne'
import WeightLossTwo from './Components/WeightLoss/WeightLossTwo'
import WeightLossThree from './Components/WeightLoss/WeightLossThree'
import WeightLossFour from './Components/WeightLoss/WeightLossFour'
import WeightLossFive from './Components/WeightLoss/WeightLossFive'
import WeightLossSix from './Components/WeightLoss/WeightLossSix'
import WeightLossSeven from './Components/WeightLoss/WeightLossSeven'
import WeightLossEight from './Components/WeightLoss/WeightLossEight'
import WeightLossNine from './Components/WeightLoss/WeightLossNine'
import WeightLossTen from './Components/WeightLoss/WeightLossTen'
import WeightLossEleven from './Components/WeightLoss/WeightLossEleven'
import WeightLossTwelve from './Components/WeightLoss/WeightLossTwelve'
import WeightLossThirteen from './Components/WeightLoss/WeightLossThirteen'
import BasicInfo from './Components/BasicInfo';

function App() {
  let [saturn_long_choice,Set_saturn_long_choice] = useState(JSON.parse(window.localStorage.getItem('saturn_long_choice')) || {
    "assessment_type":"6min",
    "category":"skin",
    "user_info":{
      "first_name":"",
      "last_name":"",
      "email":"",
      "phone_number":"",
      "age":"",
      "height":"",
      "weight":""
    },
    "skin":{
      "skin_concern":"Open pores",
      "skin_texture":"Oily",
      "skin_type":"Normal",
      "skin_allergy_to":"Vitamin C",
      "acne":"Once in a week",
      "water_intake":"1-2 litres",
      "food_preference":"Homemade food",
      "food_type":"Oily",
      "eating_culture":"Non-vegetarian",
      "sleeping_pattern":"3-5 hours",
      "work_style":"9-10 hours",
      "smoke_drink":"Daily",
      "health_issues":{
        "Thyroid":true,
        "Hypertension": false,
        "Diabetes": false,
        "Indigestion": false,
        "Heart":false,
        "Kidney":false
      },
      "blackheads_whiteheads":"Chin",
      "acne_scars":"Yes",
      "pimples_acne":"Yes",
      "ageing_pattern":"Ageing signs",
      "wrinkles_location":"Around the eyes",
      "skin_products":"Yes"
    },
    "weight_management":{
      "meals_a_day":"Greater than 6 times",
      "exercise_a_week":"Daily",
      "check_list":{
        "Cholestrol": true,
        "Thyroid":false,
        "Heart":false,
        "Diabetes": false,
        "Kidney":false,
        "No_such_problems": false,
        "Others": false,
        "Others_input":""
      },
      "overweight":"Yes",
      "water_intake":"1-2 litres",
      "food_preference":"Homemade food",
      "food_type":"Oily",
      "sleeping_pattern":"3-5 hours",
      "work_style":"9-10 hours",
      "smoke_drink":"Daily",
      "exercise":"Daily",
      "past_allergy":"Yes",
      "not_in_control":"Months",
      "weight_management_products":"Yes"
    },
    "appointment_type":"FREE Consultation call"
  })

const Set_data = (item,val) => {
  Set_saturn_long_choice((prevState)=>{
    return {...prevState,[item]: val}
  })
}

const Set_minor_data = (minor_key,item,val) => {
  Set_saturn_long_choice((state)=>{
    return {...state,[minor_key]:{
      ...state[minor_key],
      [item]: val
    }}
  })
}

const Set_problems_data = (item,val) => {
  Set_saturn_long_choice((state) => {
    return {...state,"skin": {
        ...state["skin"], ["health_issues"]:{
          ...state["skin"]["health_issues"],
          [item]:!val
        }
      }
    }
  })
}

const Set_weight_data = (item,val) => {
  Set_saturn_long_choice((state) => {
    return {...state,"weight_management": {
        ...state["weight_management"], ["check_list"]:{
          ...state["weight_management"]["check_list"],
          [item]:!val,
          "No_such_problems":false
        }
      }
    }
  })
}

const Set_others_input = (item,val) => {
  Set_saturn_long_choice((state) => {
    return {...state,"weight_management": {
        ...state["weight_management"], ["check_list"]:{
          ...state["weight_management"]["check_list"],
          [item]:val
        }
      }
    }
  })
}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('saturn_long_choice',JSON.stringify(saturn_long_choice))
  },[saturn_long_choice])

  return (
    <BrowserRouter basename="/pages/long-consultation/s"> 
       <div className='main-container'>
           <Routes>
             <Route path='/' exact element={<LandingPage Set_data={Set_data}/>}/>
             {/* <Route path='/test' exact element={<ProgressBar Set_data={Set_data}/>}/> */}
             <Route path='/choice' exact element={<ChoicePage saturn_long_choice={saturn_long_choice} 
                Set_data={Set_data}
                Set_minor_data={Set_minor_data}/>}/>
             <Route path='/user-details' exact element={<BasicInfo saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             {/* <Route path='/hairfall' exact element={<HairOne/>}/>
             <Route path='/hairfall-1' exact element={<HairTwo/>}/>
             <Route path='/hairfall-2' exact element={<HairThree/>}/> */}
             <Route path='/skin' exact element={<SkinOne saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-1' exact element={<SkinTwo saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-2' exact element={<SkinThree saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-3' exact element={<SkinFour saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-4' exact element={<SkinFive saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-5' exact element={<SkinSix saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-6' exact element={<SkinSeven saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-7' exact element={<SkinEight saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-8' exact element={<SkinNine saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-9' exact element={<SkinTen saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-10' exact element={<SkinEleven saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-11' exact element={<SkinTwelve saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-12' exact element={<SkinThirteen saturn_long_choice={saturn_long_choice}
             Set_problems_data={Set_problems_data} />}/>
             <Route path='/skin-13' exact element={<SkinFourteen saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-14' exact element={<SkinFifteen saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-15' exact element={<SkinSixteen saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-16' exact element={<SkinSeventeen saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-17' exact element={<SkinEighteen saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             {/* <Route path='/performance' exact element={<PerformanceOne/>}/>
             <Route path='/performance-1' exact element={<PerformanceTwo/>}/>
             <Route path='/performance-2' exact element={<PerformanceThree/>}/>
             <Route path='/performance-3' exact element={<PerformanceFour/>}/>
             <Route path='/performance-4' exact element={<PerformanceFive/>}/>
             <Route path='/beard' exact element={<BeardOne/>}/>
             <Route path='/beard-1' exact element={<BeardTwo/>}/>
             <Route path='/beard-2' exact element={<BeardThree/>}/>*/}
             <Route path='/weight-management' exact element={<WeightLossOne saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/weight-management-1' exact element={<WeightLossTwo saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/weight-management-2' exact element={<WeightLossThree saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/weight-management-3' exact element={<WeightLossFour saturn_long_choice={saturn_long_choice}
             Set_weight_data={Set_weight_data}/>}/>
             <Route path='/weight-management-4' exact element={<WeightLossFive saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/weight-management-5' exact element={<WeightLossSix saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/weight-management-6' exact element={<WeightLossSeven saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/weight-management-7' exact element={<WeightLossEight saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/weight-management-8' exact element={<WeightLossNine saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/weight-management-9' exact element={<WeightLossTen saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/weight-management-10' exact element={<WeightLossEleven saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/weight-management-11' exact element={<WeightLossTwelve saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/weight-management-12' exact element={<WeightLossThirteen saturn_long_choice={saturn_long_choice}
             Set_minor_data={Set_minor_data}/>}/>
             <Route path='/appointment' exact element={<Appointment saturn_long_choice={saturn_long_choice} 
                Set_data={Set_data}/>}/>
             {/* <Route path='/book' exact element={<Book/>}/> */}
             {/* <Route path='/recommendation' exact element={<Recommendation saturn_long_choice={saturn_long_choice}/>}/> */}
             <Route path='/callback' exact element={<Callback saturn_long_choice={saturn_long_choice}/>}/>
             <Route path='*' exact element={<LandingPage Set_data={Set_data}/>}/>
           </Routes>
       </div> 
      </BrowserRouter>
    /* // <div className='main-container'>
    //   <LandingPage/>
    // </div> */
    //  <div onChange={onChangeValue} className="main">
    //     <input className='a' type="radio" value="Sunday" name="Weeks" /> Sunday
    //     <input className='b' type="radio" value="Mon" name="Weeks" /> Mon
    //     <input className='c' type="radio" value="Tues" name="Weeks" /> Tues
    //   </div> 
      // <BrowserRouter>
      //   <Routes>
      //       <Route path='/' element={<First choice={choice} onchg={onchg}/>}/>
      //       <Route path='/first' element={<Parent firstName={payload['user1']['firstNameOne']} 
      //       lastName={payload['user1']['lastNameOne']}  choice={choice}
      //       onchange={onchange}/>}/>
      //       <Route path='/second' element={<Child firstName={payload['user2']['firstNameTwo']}
      //         lastName={payload['user2']['lastNameTwo']} choice={choice} 
      //         onchange={onchange}/>}/>
      //       <Route path='/final' element={<Final payload={payload} choice={choice}/>}/>
      //   </Routes>
      // </BrowserRouter>
  );
}

export default App;
