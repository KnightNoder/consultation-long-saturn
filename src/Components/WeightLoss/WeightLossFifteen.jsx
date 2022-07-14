import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import {useState,useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';


const WeightLossEight = ({saturn_long_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="87.5"
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
              <h5>What type of diet do you follow?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","eating_culture","Vegetarian including milk products")} noImage="true" choice={saturn_long_choice.skin.eating_culture} value="Vegetarian including milk products" text="Vegetarian including milk products"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","eating_culture","Vegetarian without milk products")} noImage="true" choice={saturn_long_choice.skin.eating_culture} value="Vegetarian without milk products"  text="Vegetarian without milk products"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","eating_culture","Non-vegetarian")} noImage="true" choice={saturn_long_choice.skin.eating_culture} value="Non-vegetarian" text="Non-vegetarian"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-12"} backLink="skin-10"/>
    </>
  )
}

export default WeightLossEight