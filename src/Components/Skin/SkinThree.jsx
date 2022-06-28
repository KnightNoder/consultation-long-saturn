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
          <ProgressBarComp progress_step="44.5"
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
              <h5>What is the frequency of your acne?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","acne","Once in a week")} noImage="true" choice={saturn_long_choice.skin.acne} value="Once in a week" text="Once in a week"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","acne","Once in a month or 2 months")} noImage="true" choice={saturn_long_choice.skin.acne} value="Once in a month or 2 months"  text="Once in a month or 2 months"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","acne","Always have acne")} noImage="true" choice={saturn_long_choice.skin.acne} value="Always have acne" text="Always have acne"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","acne","Very rarely")} noImage="true" choice={saturn_long_choice.skin.acne} value="Very rarely" text="Very rarely"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","acne","No acne")} noImage="true" choice={saturn_long_choice.skin.acne} value="No acne" text="No acne"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-3"} backLink="skin-1"/>
    </>
  )
}

export default SkinOne

