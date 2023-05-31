import React from 'react'
import collectionImg from '../assets/images/collection-img.png';
import centerImg from '../assets/images/HomePage/center-img.png';
import towelsImg from '../assets/images/towels.png';
import linenImg from '../assets/images/linen-img.png';
import blanketImg from '../assets/images/blanket-img.png';
import { useSpring } from 'react-spring';
import { InView } from 'react-intersection-observer';
export function TeaserContainer() {

    const springs = useSpring({
        transform: InView ? 'scale(1)' : 'scale(0.5)',
        from: { transform: 'scale(0.5)' },
        config: { tension: 300, friction: 20, duration: 1500 },
    });

    return (
        <div className='teaser-container full'>
            <div className='title'>
                <h1> מה חדש?</h1>
                <p style={springs}>
                    ריכזנו עבורכם את מקבץ הקטגוריות אותם אנו מספקים, כל מוצר חתום על
                    ידינו באיכות הגבוהה ביותר תוך רצון לספק חמירים הונגנים לכל הלקוחות
                    שלנו.
                </p>
            </div>
            <div className='teaser-1 teaser'>
                <img src={collectionImg} alt='' className='' style={springs} />
                <h2>המארזים שלנו</h2>
                <p>
                    מארזים שלנו מהווים תכנון ייחודי ומודרני שמעניק לחדר השינה שלכם מראה
                    אלגנטי ומרהיב. נשמה רומנטית מושקעת בפרטים האיכותיים והמדויקים, יחד
                    עם רמה גבוהה של נוחות ועמידות.
                </p>
            </div>
            <div className='center-img'>
                <img src={centerImg} alt='CENTER' className='center' style={springs} />
            </div>
            <div className='teaser-2 teaser'>
                <img src={towelsImg} alt='' style={springs} />
                <h2>המגבות</h2>
                <p>
                    מגבות המכירה שלנו הן הבחירה המושלמת עבורכם. עשויות מ-100 אחוז כותנה
                    איכותית, הן מעניקות תחושה נעימה ורכה על העור. בנוסף לכך, הן עמידות
                    ואיכותיות מאוד, מה שמבטיח שתהנו מהן לאורך זמן.
                </p>
            </div>
            <div className='teaser-3 teaser'>
                <img src={linenImg} alt='' style={springs} />
                <h2>מצעים</h2>
                <p>
                    צעים שלנו הם הבחירה המושלמת עבורכם. באיכותם המעולה ובמחירם ההוגן, הם
                    מציעים חווית שינה נהדרת ללקוחותינו. מצעים איכותיים ועמידים, הם
                    עשויים מחומרים ברמה הגבוהה ביותר. אנו מתחייבים לאיכות המוצרים שלנו,
                    מבטיחים לכם מצעים שישמשו אתכם לאורך זמן. יחד עם זאת, אנו מתיימרים
                    לשמור על המחירים ההוגנים ללקוחותינו, כך שתוכלו ליהנות ממצעים
                    איכותיים במחיר שפוי וסביר.
                </p>
            </div>
            <div className='teaser-4 teaser'>
                <img src={blanketImg} alt='' style={springs} onEnter />
                <h2>מוצרים משלימים למיטה</h2>
                <p>
                    מוצרים המשלימים את המיטה שלכם הם הפתרון המושלם ליצירת חווית שינה
                    מושלמת. בחרו מתוך מגוון המוצרים שלנו, המתאימים בצורה מושלמת לסגנון
                    ולטעמים האישיים שלכם. סדינים איכותיים ונעימים, כריות מתכווננות
                    לתמיכה מותאמת אישית, ושמיכות רכות ומפנקות. אלה הם רק חלק מהמוצרים
                    המשגעים שנמצאים בקולקציה שלנו.
                </p>
            </div>
        </div>)
}
