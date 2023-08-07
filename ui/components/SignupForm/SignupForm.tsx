import { ProgressSteps } from '#/ui/components/ProgressSteps';
import { LoginCard } from '#/ui/components/LoginCard';
import { PersonalInformationForm } from './PersonalInformationForm';
import { AdditionalDetailsForm } from './AdditionalDetailsForm';
import { PasswordForm } from './PasswordForm';
import { FormData, Loan } from '#/app/(login)/sign-up/page';

const FORM_STEPS = [
  { title: 'Personal Information', component: PersonalInformationForm },
  { title: 'Additional Information', component: AdditionalDetailsForm },
  { title: 'Password', component: PasswordForm },
];

export type SignupFormProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  loan: Loan;
  setFormData: (formData: FormData) => void;
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SignupForm({
  step,
  setStep,
  formData,
  loan,
  setFormData,
  setFormSubmitted,
}: SignupFormProps) {
  const { component: CurrentFormComponent, title } = FORM_STEPS[step];
  return (
    <LoginCard
      title="Complete your loan application"
      className="sm:mt-20"
      back={step !== 0 ? () => setStep(step - 1) : undefined}
      showTermsNotice
    >
      <ProgressSteps
        className="mb-10"
        totalSteps={FORM_STEPS.length}
        currentStep={step}
      />
      <h2 className="text-brand mb-10 text-center font-semibold">{title}</h2>
      <CurrentFormComponent
        formData={formData}
        loan={loan}
        setFormData={setFormData}
        setStep={setStep}
        setFormSubmitted={setFormSubmitted}
      />
    </LoginCard>
  );
}
