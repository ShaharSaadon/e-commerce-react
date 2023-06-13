import delivery from '../assets/images/HomePage/delivery.png';
import shield from '../assets/images/HomePage/shield.png';
import payment from '../assets/images/HomePage/payment.png';
import quality from '../assets/images/HomePage/quality.png';
import bambuk from '../assets/images/HomePage/bambuk.png';
import cotton from '../assets/images/HomePage/cotton.png';
import מצעים from '../assets/images/DynamicProducts/bedding-cover.jpg';
import מוצרים from '../assets/images/DynamicProducts/pillows.jpg';
import מגבות from '../assets/images//DynamicProducts/towels.png';
import מארזים from '../assets/images/DynamicProducts/happy.jpeg';
import { blueGrey, pink } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const mainNavLinks = [
  { path: '/about', text: 'קצת עלינו' },
  { path: '/מצעים', text: 'מצעים' },
  { path: '/מגבות', text: 'מגבות' },
  { path: '/מארזים', text: 'המארזים שלנו' },
  { path: '/מוצרים-משלימים-למיטה', text: 'מוצרים משלימים למיטה' },
];
const sideNavLinks = [
  { path: '/', text: 'בית' },
  { path: '/about', text: 'קצת עלינו' },
  { path: '/מצעים', text: 'מצעים' },
  { path: '/מגבות', text: 'מגבות' },
  { path: '/מארזים', text: 'המארזים שלנו' },
  { path: '/מוצרים-משלימים-למיטה', text: 'מוצרים משלימים למיטה' },
  { path: '/blog', text: 'בלוג' },
  { path: '/contact', text: 'צור קשר' },
];
const kingSizeLinks = [
  { path: '/blog', label: 'בלוג' },
  { path: '/about', label: 'קצת עלינו' },
  { path: '/', label: 'עמוד הבית' },
  { path: '/contact', label: 'צרו איתנו קשר' },
];
const productLinks = [
  { path: '/מצעים', label: 'מצעים' },
  { path: '/מגבות', label: 'מגבות' },
  { path: '/מארזים', label: 'המארזים שלנו' },
  { path: '/מוצרים', label: 'מוצרים משלימים למיטה' },
];
const featuresLinks = [
  { src: shield, alt: 'מאובטח', text: 'Hypoallergenic' },
  { src: delivery, alt: 'משלוח', text: 'Fast Delivery' },
  { src: bambuk, alt: 'משלוח', text: '100% Bambuk' },
  { src: cotton, alt: 'משלוח', text: '100% Cotton' },
  { src: payment, alt: 'תשלום', text: 'High Quality Fair Prices' },
  { src: quality, alt: 'איכותי', text: 'Safe Order' },
];
const imageMap = {
  מגבות: מגבות,
  'מוצרים-משלימים-למיטה': מוצרים,
  מצעים: מצעים,
  מארזים: מארזים,
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[300]),
  backgroundColor: pink[300],
  borderRadius: '20px', // This sets border radius
  width: '100%',
  fontWeight: '700',
  padding: '8px 16px',
  marginBlock: '24px',
  '&:hover': {
    backgroundColor: pink[100],
  },
}));

const ColorButtonHome = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[900]),
  backgroundColor: 'inherit',
  border: 'white 2px solid',
  '&:hover': {
    backgroundColor: blueGrey[900],
    border: 'black 2px solid',
  },
}));

const editFields = [
  { label: 'שם המוצר', name: 'name', type: 'text' },
  { label: 'תיאור', name: 'description', type: 'text' },
  { label: 'מחיר', name: 'price', type: 'number' },
  { label: 'תיאור קצר', name: 'shortDescription', type: 'text' },
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
};
