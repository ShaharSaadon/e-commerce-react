
import { OrderSummery } from '../components/ShoppingCart/OrderSummery';
import { AddressForm } from '../components/ShoppingCart/AddressForm';
import { PaymentForm } from '../components/ShoppingCart/PaymentForm.jsx';
import { useState } from 'react';
import { httpService } from '../services/http.service';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel'
export function ShoppingCartPage() {

    const [currentStep, setCurrentStep] = useState(0)
    const [address, setAddress] = useState('')


    const handleNextStep = () => {
        if (currentStep !== 2) setCurrentStep(prevStep => prevStep + 1);
        else {
            const orderId = 'YOUR_ORDER_ID';
            const amount = 'YOUR_AMOUNT';
            const currency = 'YOUR_CURRENCY';

            httpService.post('order/pay', { orderId, amount, currency })
                .then(response => {
                    console.log('Payment response:', response.data);
                    // Handle the next step here
                })
                .catch(err => console.error(err));

            setCurrentStep(prevStep => prevStep + 1);
        }

    };
    const steps = [
        'סיכום עגלת קניוית',
        'פרטי משלוח',
        'שיטת תשלום',
        'סיום הזמנה וקבלה',
    ];
    return (
        <section className='shopping-cart-page'>

            <div className="header">
                <h1 className='logo'>LOGO</h1>
                {/* <div className="process-bar">
                    <div className={currentStep === 1 ? "summery active" : "summery"}>
                        <p><span>1</span> Summary</p>
                    </div>
                    <div className={currentStep === 2 ? "summery active" : "summery"}>
                        <p><span>2</span> Shipping details</p>
                    </div>
                    <div className={currentStep === 3 ? "summery active" : "summery"}>
                        <p><span>3</span> Method of Payment</p>
                    </div>
                    <div className={currentStep === 4 ? "summery active" : "summery"}>
                        <p><span>4</span>Printing an order</p>
                    </div>
                </div> */}

                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={currentStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>


            </div>
            {currentStep === 0 && <OrderSummery onNext={handleNextStep} />}
            {currentStep === 1 && <AddressForm onNext={handleNextStep} onAddressComplete={setAddress} />}
            {currentStep === 2 && <PaymentForm onNext={handleNextStep} />}
            {/* More steps here */}
        </section>
    )
}
