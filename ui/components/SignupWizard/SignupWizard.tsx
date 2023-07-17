import { Stepper } from '#/ui/components/Stepper';
import { PersonalInformationForm } from './PersonalInformationForm';
import { AdditionalDetailsForm } from './AdditionalDetailsForm';
import { PasswordForm } from './PasswordForm';

const FORM_STEPS = [
  { title: 'Personal Information', component: PersonalInformationForm },
  { title: 'Additional Information', component: AdditionalDetailsForm },
  { title: 'Password', component: PasswordForm },
];

export function SignupWizard({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { component: CurrentFormComponent, title } = FORM_STEPS[step];

  return (
    <>
      <Stepper
        className="mb-10"
        totalSteps={FORM_STEPS.length}
        currentStep={step}
      />
      <h2 className="text-brand-primary mb-10 text-center font-semibold">
        {title}
      </h2>
      <CurrentFormComponent setStep={setStep} />
    </>
  );
}
