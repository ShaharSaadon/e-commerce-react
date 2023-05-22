import React, { useEffect } from 'react'
import bambuk from '../assets/images/Blog/bambuk-linen.jpg'
import { useSelector } from 'react-redux';
export function Blog() {

    const articles = useSelector((storeState) => storeState.articleModule)
    console.log('articles:', articles)
    useEffect(() => {
        document.title = `KingSize | בלוג`;
    }, [])

    return (
        <section className='blog-container'>
            <div className="blog-header flex flex-column">
                <h2>המאמרים שלנו</h2>
                <div className='navigator'>דף הבית | בלוג</div>

            </div>
            <div className="content">
                <div className="article1">
                    <div className="text">
                        <h1>כמה שעות אתם ישנים בלילה ומה זה אומר עליכם?</h1>
                        <p>הגיע הזמן לענות על שאלת השאלות- כמה שעות צריך לישון בלילה? האם 6 שעות שינה בלילה זה מספיק? האם כל האנשים זקוקים לאותו מספר של שעות שינה? האם מבוגרים וילדים צריכים לישון אותו מספר שעות? אנחנו כבר יודעים ששנת הלילה...</p>
                        <button className='continue'>להמשך קריאה</button>

                    </div>
                    <img src={bambuk} alt="" />
                </div>
                <div className="article2 article">
                    <div className="text">
                        <img src={bambuk} alt="" />                </div>
                    <h1>איך לעצב חדר שינה נקי ולבן שירגיש כמו בבית מלון?</h1>
                    <p>צבע לבן, פרחים יבשים ומרקמים רכים - חג שבועות הוא ההשראה המושלמת לעיצוב חדר שינה נקי ושליו שמרגיש כמו מלון יוקרתי. שאבנו השראה מהחג ובנינו עבורכם את המדריך המלא לעיצוב חדר השינה ברוח חג שבועות! החל מיצירת פלטת צבעים מרגיעה,...</p>
                    <button className='continue' >להמשך קריאה</button>

                </div>
                <div className="article3 article">
                    <div className="text">
                        <img src={bambuk} alt="" />                </div>
                    <h1>איך לעצב חדר שינה נקי ולבן שירגיש כמו בבית מלון?</h1>
                    <p>צבע לבן, פרחים יבשים ומרקמים רכים - חג שבועות הוא ההשראה המושלמת לעיצוב חדר שינה נקי ושליו שמרגיש כמו מלון יוקרתי. שאבנו השראה מהחג ובנינו עבורכם את המדריך המלא לעיצוב חדר השינה ברוח חג שבועות! החל מיצירת פלטת צבעים מרגיעה,...</p>
                    <button className='continue'>להמשך קריאה</button>

                </div>
                <div className="article4 article">
                    <div className="text">
                        <img src={bambuk} alt="" />
                        <h1>איך לעצב חדר שינה נקי ולבן שירגיש כמו בבית מלון?</h1>
                        <p>צבע לבן, פרחים יבשים ומרקמים רכים - חג שבועות הוא ההשראה המושלמת לעיצוב חדר שינה נקי ושליו שמרגיש כמו מלון יוקרתי. שאבנו השראה מהחג ובנינו עבורכם את המדריך המלא לעיצוב חדר השינה ברוח חג שבועות! החל מיצירת פלטת צבעים מרגיעה,...</p>
                        <button className='continue'>להמשך קריאה</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
