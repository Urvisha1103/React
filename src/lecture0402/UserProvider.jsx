import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import ThreeStageForm from "./lecture0402/UserProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ThreeStageForm() {
  const [step, setStep] = useState(1);
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [duration, setDuration] = useState(1);
  
  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  
  const calculateTotal = () => {
    return principal + (principal * rate * duration) / 100;
  };

  return (
    <Card className="w-96 mx-auto mt-10 p-4 shadow-lg">
      <CardContent>
        {step === 1 && (
          <div>
            <h2 className="text-xl mb-4">Enter Principal</h2>
            <Input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
            <Button className="mt-4" onClick={handleNext}>Next</Button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-xl mb-4">Enter Rate of Interest</h2>
            <Input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
            <div className="mt-4 flex justify-between">
              <Button onClick={handlePrev}>Back</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-xl mb-4">Enter Duration (Years)</h2>
            <Input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
            <div className="mt-4 flex justify-between">
              <Button onClick={handlePrev}>Back</Button>
              <Button onClick={handleNext}>Submit</Button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className="text-xl mb-4">Total Amount</h2>
            <p className="text-2xl font-bold">₹ {calculateTotal()}</p>
            <Button className="mt-4" onClick={() => setStep(1)}>Restart</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
