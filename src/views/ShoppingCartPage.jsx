import { OrderSummery } from "../components/ShoppingCart/OrderSummery";
import { AddressForm } from "../components/ShoppingCart/AddressForm";
import { PaymentForm } from "../components/ShoppingCart/PaymentForm2.jsx";
import { useState } from "react";
import { httpService } from "../services/http.service";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
export function ShoppingCartPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [address, setAddress] = useState("");

    function handleNextStep() {
        setCurrentStep((prevStep) => prevStep + 1);
    }
    function handlePreviousStep() {
        setCurrentStep((prevStep) => prevStep - 1);
    }

    const steps = [
        "סיכום עגלת קניוית",
        "פרטי משלוח",
        "שיטת תשלום",
        "סיום הזמנה וקבלה",
    ];
    return (
        <section className="shopping-cart-page">
            <div className="header">
                <Box sx={{ width: "100%" }}>
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
            {currentStep === 1 && (
                <AddressForm
                    onNext={handleNextStep}
                    onAddressComplete={setAddress}
                    onPrevious={handlePreviousStep}
                />
            )}
            {currentStep === 2 && (
                <PaymentForm
                    onNext={handleNextStep}
                    onPrevious={handlePreviousStep}
                />
            )}
        </section>
    );
}
