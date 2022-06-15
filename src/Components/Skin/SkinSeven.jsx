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
          <ProgressBarComp progress_step="64.5" 
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
              <h5>Explain your wrinkles/ ageing pattern?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","ageing_pattern","No wrinkles")} noImage="true" choice={saturn_long_choice.skin.ageing_pattern} value="No wrinkles" text="No wrinkles"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","ageing_pattern","Ageing signs")} noImage="true" choice={saturn_long_choice.skin.ageing_pattern} value="Ageing signs"  text="Ageing signs"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","ageing_pattern","I have wrinkles around my eyes and cheeks")} noImage="true" choice={saturn_long_choice.skin.ageing_pattern} value="I have wrinkles around my eyes and cheeks" text="I have wrinkles around my eyes and cheeks"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","ageing_pattern","I have few lines of ageing on forehead")} noImage="true" choice={saturn_long_choice.skin.ageing_pattern} value="I have few lines of ageing on forehead" text="I have few lines of ageing on forehead"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-7"} backLink="skin-5"/>
    </>
  )
}

export default SkinOne