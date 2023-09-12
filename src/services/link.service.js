import delivery from "../assets/images/HomePage/delivery.png";
import shield from "../assets/images/HomePage/shield.png";
import payment from "../assets/images/HomePage/payment.png";
import quality from "../assets/images/HomePage/quality.png";
import bambuk from "../assets/images/HomePage/bambuk.png";
import cotton from "../assets/images/HomePage/cotton.png";
import מצעים from "../assets/images/DynamicProducts/bedding-cover.jpg";
import מוצרים from "../assets/images/DynamicProducts/pillows.jpg";
import מגבות from "../assets/images//DynamicProducts/towels.png";
import מארזים from "../assets/images/DynamicProducts/happy.jpeg";
import teaser1 from "../assets/images/HomePage/teaser-1.jpeg";
import teaser2 from "../assets/images/HomePage/teaser-2.jpg";
import collectionImg from "../assets/images/collection-img.png";
import centerImg from "../assets/images/HomePage/center-img.png";
import towelsImg from "../assets/images/towels.png";
import linenImg from "../assets/images/linen-img.png";
import clock from "../assets/images/Contact/clock.svg";
import mail from "../assets/images/Contact/mail.svg";
import phone from "../assets/images/Contact/phone.svg";
import blanketImg from "../assets/images/blanket-img.png";
import { blueGrey, pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const mainNavLinks = [
    { path: "/about", text: "קצת עלינו" },
    { path: "/מצעים", text: "מצעים" },
    { path: "/מגבות", text: "מגבות" },
    { path: "/מארזים", text: "המארזים שלנו" },
    { path: "/מוצרים-משלימים-למיטה", text: "מוצרים משלימים למיטה" },
];
const sideNavLinks = [
    { path: "/", text: "בית" },
    { path: "/about", text: "קצת עלינו" },
    { path: "/מצעים", text: "מצעים" },
    { path: "/מגבות", text: "מגבות" },
    { path: "/מארזים", text: "המארזים שלנו" },
    { path: "/מוצרים-משלימים-למיטה", text: "מוצרים משלימים למיטה" },
    { path: "/blog", text: "בלוג" },
    { path: "/contact", text: "צור קשר" },
];
const kingSizeLinks = [
    { path: "/blog", label: "בלוג" },
    { path: "/about", label: "קצת עלינו" },
    { path: "/", label: "עמוד הבית" },
    { path: "/contact", label: "צרו איתנו קשר" },
];
const productLinks = [
    { path: "/מצעים", label: "מצעים" },
    { path: "/מגבות", label: "מגבות" },
    { path: "/מארזים", label: "המארזים שלנו" },
    { path: "/מוצרים", label: "מוצרים משלימים למיטה" },
];
const featuresLinks = [
    { src: shield, alt: "מאובטח", text: "Hypoallergenic" },
    { src: delivery, alt: "משלוח", text: "Fast Delivery" },
    { src: bambuk, alt: "משלוח", text: "100% Bambuk" },
    { src: cotton, alt: "משלוח", text: "100% Cotton" },
    { src: payment, alt: "תשלום", text: "High Quality Fair Prices" },
    { src: quality, alt: "איכותי", text: "Safe Order" },
];
const imageMap = {
    מגבות: מגבות,
    "מוצרים-משלימים-למיטה": מוצרים,
    מצעים: מצעים,
    מארזים: מארזים,
};
const boxesData = [
    {
        backgroundImage: teaser2,
        title: "המצעים שלנו",
        description:
            "אנו עושים את מירב המאמצים בכדי לתת לכם את המצעים האיכותיים ביותר, במחירים ההוגנים ביותר",
        link: "/מצעים",
        buttonText: "למצעים",
    },
    {
        backgroundImage: teaser1,
        title: "המגבות שלנו",
        description: "תוכלו להיכנס ולצפות במגוון המגבות האיכותיות ביותר שלנו",
        link: "/מגבות",
        buttonText: "למגבות",
    },
];
const contactData = [
    {
        className: "box",
        imgSrc: clock,
        alt: "",
        title: "שעות עבודה",
        content: ["ראשון עד חמישי", "09:00 - 21:00"],
    },
    {
        className: "box",
        imgSrc: mail,
        alt: "",
        title: "מייל",
        links: [
            {
                href: "mailto:kingSize@KingSize.co.il",
                text: "kingSize@KingSize.co.il",
            },
            {
                href: "mailto:kingSize@KingSize.co.il",
                text: "kingSize@KingSize.co.il",
            },
        ],
    },
    {
        className: "box",
        imgSrc: phone,
        alt: "",
        title: "טלפון",
        content: ["+97254-3944574", "+97254-3944574"],
    },
];

const sizesData = ["180/100", "200-200", "300-300"];

const teaserContainerData = [
    {
        className: "title animated",
        title: "מה חדש?",
        description:
            "ריכזנו עבורכם את מקבץ הקטגוריות אותם אנו מספקים, כל מוצר חתום על ידינו באיכות הגבוהה ביותר תוך רצון לספק חמירים הונגנים לכל הלקוחות שלנו.",
    },
    {
        className: "teaser-1 teaser animated",
        title: "המארזים שלנו",
        description:
            "מארזים שלנו מהווים תכנון ייחודי ומודרני שמעניק לחדר השינה שלכם מראה אלגנטי ומרהיב. נשמה רומנטית מושקעת בפרטים האיכותיים והמדויקים, יחד עם רמה גבוהה של נוחות ועמידות.",
        imgSrc: collectionImg,
        alt: "",
    },
    {
        className: "center-img animated",
        imgSrc: centerImg,
        alt: "CENTER",
    },
    {
        className: "teaser-2 teaser animated",
        title: "המגבות",
        description:
            "מגבות המכירה שלנו הן הבחירה המושלמת עבורכם. עשויות מ-100 אחוז כותנה איכותית, הן מעניקות תחושה נעימה ורכה על העור. בנוסף לכך, הן עמידות ואיכותיות מאוד, מה שמבטיח שתהנו מהן לאורך זמן.",
        imgSrc: towelsImg,
        alt: "",
    },
    {
        className: "teaser-3 teaser animated",
        title: "מצעים",
        description:
            "צעים שלנו הם הבחירה המושלמת עבורכם. באיכותם המעולה ובמחירם ההוגן, הם מציעים חווית שינה נהדרת ללקוחותינו. מצעים איכותיים ועמידים, הם עשויים מחומרים ברמה הגבוהה ביותר. אנו מתחייבים לאיכות המוצרים שלנו, מבטיחים לכם מצעים שישמשו אתכם לאורך זמן. יחד עם זאת, אנו מתיימרים לשמור על המחירים ההוגנים ללקוחותינו, כך שתוכלו ליהנות ממצעים איכותיים במחיר שפוי וסביר.",
        imgSrc: linenImg,
        alt: "",
    },
    {
        className: "teaser-4 teaser animated",
        title: "מוצרים משלימים למיטה",
        description:
            "מוצרים המשלימים את המיטה שלכם הם הפתרון המושלם ליצירת חווית שינה מושלמת. בחרו מתוך מגוון המוצרים שלנו, המתאימים בצורה מושלמת לסגנון ולטעמים האישיים שלכם. סדינים איכותיים ונעימים, כריות מתכווננות לתמיכה מותאמת אישית, ושמיכות רכות ומפנקות. אלה הם רק חלק מהמוצרים המשגעים שנמצאים בקולקציה שלנו.",
        imgSrc: blanketImg,
        alt: "",
    },
];

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[300]),
    backgroundColor: pink[300],
    borderRadius: "20px", // This sets border radius
    width: "100%",
    fontWeight: "700",
    padding: "8px 16px",
    marginBlock: "24px",
    "&:hover": {
        backgroundColor: pink[100],
    },
}));

const ColorButtonHome = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[900]),
    backgroundColor: "inherit",
    border: "white 2px solid",
    "&:hover": {
        backgroundColor: blueGrey[900],
        border: "black 2px solid",
    },
}));

const editFields = [
    { label: "שם המוצר", name: "name", type: "text" },
    { label: "תיאור", name: "description", type: "text" },
    { label: "מחיר", name: "price", type: "number" },
    { label: "תיאור קצר", name: "shortDescription", type: "text" },
    {
        label: "קטגוריה",
        name: "category",
        type: "select",
        options: ["מגבות", "מצעים", "מארזים", "מוצרים"],
    },
];

export const linkService = {
    mainNavLinks,
    productLinks,
    kingSizeLinks,
    featuresLinks,
    imageMap,
    ColorButton,
    sideNavLinks,
    ColorButtonHome,
    editFields,
    boxesData,
    teaserContainerData,
    contactData,
};
