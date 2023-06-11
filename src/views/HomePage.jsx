
import { TeaserContainer } from '../components/HomePage/TeaserContainer';
import { RecommendationsContainer } from '../components/HomePage/RecommendationsContainer';
import { FeaturesContainer } from '../components/HomePage/FeaturesContainer';
import { ImagesContainer } from '../components/HomePage/ImagesContainer';
import { MobileTeaser } from '../components/HomePage/MobileTeaser';

export function HomePage({ setIsCartVisible }) {


    return (
        <section className='home-page-container full main-container'>
            <MobileTeaser />
            <ImagesContainer />
            <FeaturesContainer />
            <TeaserContainer />
            <RecommendationsContainer title="הנמכרים ביותר" setIsCartVisible={setIsCartVisible} />
        </section>
    );
}