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
        <div className='progress-bar'>
          <ProgressBarComp progress_step="66.5"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Did you use any skin products before and were allergic to them?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","skin_products","Yes")} noImage="true" choice={saturn_long_choice.skin.skin_products} value="Yes" text="Yes"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","skin_products","No")} noImage="true" choice={saturn_long_choice.skin.skin_products} value="No"  text="No"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"appointment"} backLink="skin-16"/>
    </>
  )
}

export default SkinOne