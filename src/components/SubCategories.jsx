import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bodyTowels from '../assets/images/body-towels.jpg';
import handTowels from '../assets/images/hand-towels.jpg';
import faceTowels from '../assets/images/face-towels.jpg';
import babyBlankets from '../assets/images/baby-blankets.jpg';
import coupleBlankets from '../assets/images/couple-blankets.jpg';
import winterBlankets from '../assets/images/winter-blankets.jpg';
import soloLinen from '../assets/images/solo-linen.jpeg';
import cottonLinen from '../assets/images/cotton-linen.jpg';
import bambukLinen from '../assets/images/bambuk-linen.jpg';
import featherPillows from '../assets/images/feather-pillows.png';
import viskoPillows from '../assets/images/visko-pillows.png';

const imageMap = {
    'body-towels': bodyTowels,
    'hand-towels': handTowels,
    'face-towels': faceTowels,
    'baby-blankets': babyBlankets,
    'couple-blankets': coupleBlankets,
    'winter-blankets': winterBlankets,
    'solo-linen': soloLinen,
    'cotton-linen': cottonLinen,
    'bambuk-linen': bambukLinen,
    'feather-pillows': featherPillows,
    'visko-pillows': viskoPillows,
};

export function SubCategories({ categories, category }) {

    const [isBarOpen, setIsBarOpen] = useState(true)

    function handleClick() {
        setIsBarOpen(!isBarOpen)
    }
    console.log('categories,categorys:', categories[category])
    return (
        <div className="sub-categories-container">
            <ul className="clean-list flex sub-list">
                {categories?.map((subCategory, index) => (
                    <React.Fragment key={index}>
                        <Link to={`/${category}/${subCategory.name}`} className='sub-box'>
                            <li className='sub-title'>{subCategory.name}</li>
                            <img src={imageMap[subCategory.name]} alt={subCategory.name} className={isBarOpen ? 'sub-img square-ratio' : 'sub-img square-ratio open'} />
                            {/* <img src={imageMap[subCategory.name]} alt={subCategory.name} className='sub-img square-ratio'/> */}
                        </Link>

                    </React.Fragment>
                ))}
            </ul>
            <button onClick={handleClick}>{isBarOpen ? 'Close' : 'Open'}</button>
        </div >
    )
}
