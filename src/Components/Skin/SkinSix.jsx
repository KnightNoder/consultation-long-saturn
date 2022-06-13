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
          <ProgressBarComp progress_step="59.5"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Do you have active pimples/pitted Acne?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","pimples_acne","Yes")} noImage="true" choice={saturn_long_choice.skin.pimples_acne} value="Yes" text="Yes"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","pimples_acne","No")} noImage="true" choice={saturn_long_choice.skin.pimples_acne} value="No"  text="No"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-6"} backLink="skin-4"/>
    </>
  )
}

export default SkinOne
