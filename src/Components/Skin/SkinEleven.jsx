import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import {useState,useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';


const SkinOne = ({saturn_long_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="82"
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-4.png?v=1655109040"
          text="My Skin"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>How often do you have junk food? </h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","food_type","Frequently")} noImage="true" choice={saturn_long_choice.skin.food_type} value="Frequently" text="Frequently"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","food_type","Rarely")} noImage="true" choice={saturn_long_choice.skin.food_type} value="Rarely"  text="Rarely"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","food_type","Never")} noImage="true" choice={saturn_long_choice.skin.food_type} value="Never" text="Never"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-11"} backLink="skin-9"/>
    </>
  )
}

export default SkinOne