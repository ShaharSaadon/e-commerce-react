
import { NavLink, Outlet } from 'react-router-dom';
import { OrderSummery } from '../components/OrderSummery';
import { AddressForm } from '../components/AddressForm';
import { useState } from 'react';

export function ShoppingCartPage() {

    const [currentStep, setCurrentStep] = useState(1);
    const [address, setAddress] = useState(null);

    const handleNextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };




    return (
        <section className='shopping-cart-page'>
            <div className="header">
                <h1 className='logo'>LOGO</h1>
                <div className="process-bar">
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
                </div>
                {currentStep === 1 && <OrderSummery onNext={handleNextStep} />}
                {currentStep === 2 && <AddressForm onNext={handleNextStep} onAddressComplete={setAddress} />}
                {/* More steps here */}
            </div>
        </section>
    )
}
