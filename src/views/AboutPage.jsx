import React, { useEffect } from "react";
import about from "../assets/images/About/about.jpg";
import logo from "../assets/images/HomePage/0.png";
// import aboutC from '../assets/images/About/about-cover.avif'
// import aboutC2 from '../assets/images/About/about-cover.jpg'
// import aboutC3 from '../assets/images/About/AB_MakingSenseOfESGBondStructures-1600x760.w.jpg'
export function AboutPage() {
    useEffect(() => {
        document.title = "KingSize | קצת עלינו";
    }, []);

    return (
        <section className="about full">
            <div className="content">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="main-content">
                    <img src={about} alt="" />
                    <div className="text">
                        קינג סייז נולד מתוך זיהוי הזדמנות להוזיל ולהנגיש מוצרי
                        טקסטיל ברמה גבוהה ואיכותית ללקוח הפרטי, אנו דוגלים
                        בשיווק מוצרי טקסטיל מחומרים טבעיים בלבד (במבוק וכותנה)
                        על מנת לספק את המוצר הרלוונטי ביותר לאקלים הישראלי שדורש
                        בדים נושמים, מאווררים והיפואלרגניים על פני בדים סינטטיים
                        שיכולים לייצר אי נוחות בימים החמים שישראל יודעת להציע.
                        אנו מציעים מצעי כותנה בשלל צפיפויות חוטים - מה שמשפיע על
                        רכות הבד, מגבות בשלל משקלים למ"ר - שמפיע על איכות הספיגה
                        של המגבת וכמו שציינו קודם תוכלו לבחור בין בדי הבמבוק
                        לבדי הכותנה שעל ההבדלים בינהם נפרט בבלוג שלנו. איך עובד
                        הקסם? לאור העובדה שהעסק כולו מבוסס על קשר עם יבואנים/
                        יצרנים מקומיים ואתר אינטרנט - ללא עלויות שצריכות להתגלגל
                        ללקוח כגון : חנות, עובדים, רכבים וכו' אנו יודעים להנגיש
                        את המחירים הנמוכים בשוק (ביחס לאיכות המוצרים) ולאפשר לכל
                        אדם פרטי להתפנק על מוצרי בוטיק במחירים לכל כיס.
                    </div>
                </div>
            </div>
        </section>
    );
}
