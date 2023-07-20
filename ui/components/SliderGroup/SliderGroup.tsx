import { Slider } from './Slider';

type LabelForSliderProps = {
  type: 'min' | 'max';
  value: number;
};

const LabelForSlider = ({ type, value }: LabelForSliderProps) => {
  return (
    <p className="text-gray-500 dark:text-gray-200">
      {value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      })}{' '}
      <span className="dark:text-brand-secondary capitalize text-gray-400">
        / {type}
      </span>
    </p>
  );
};

export function SliderGroup() {
  return (
    <div className="flex flex-col gap-4">
      {/* Label for select */}
      <p className="font-brand text-gray-600 dark:text-white">Loan Amount</p>
      <Slider />
      <div className="flex justify-between">
        <LabelForSlider type="min" value={1000} />
        <LabelForSlider type="max" value={100000} />
      </div>
    </div>
  );
}
