import { LoanCalculator } from '#/ui/components/LoanCalculator';
import { LoanSummaryBox } from '#/ui/components/LoanSummaryBox';

export default function Page() {
  return (
    <div className="mx-auto flex flex-col justify-center gap-10 sm:mt-20 sm:flex-row">
      <LoanCalculator />
      <LoanSummaryBox
        size="sm"
        value={10000}
        type="credit-builder"
        className="hidden sm:grid"
      />
    </div>
  );
}
