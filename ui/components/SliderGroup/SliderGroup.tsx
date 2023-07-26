import { Select, SelectItem } from '#/ui/components/Select';
import { Slider } from './Slider';
import { Label } from '#/ui/components/Label';

export type SliderGroupProps = {
  label: string;
  min: number;
  max: number;
  type?: 'months' | 'currency';
  options: number[];
  value: string;
  onChange: (value: string) => void;
};

type LabelForSliderProps = {
  type: 'min' | 'max';
  value: number;
  sliderType: SliderGroupProps['type'];
};

const LabelForSlider = ({ type, value, sliderType }: LabelForSliderProps) => {
  const labelText =
    sliderType === 'months'
      ? `${value} months`
      : `${value.toLocaleString('en-US', {
          currency: 'usd',
          style: 'currency',
          minimumFractionDigits: 0,
        })}`;

  return (
    <p className="text-gray-500 dark:text-gray-200">
      {labelText}{' '}
      <span className="dark:text-brand-secondary capitalize text-gray-400">
        / {type}
      </span>
    </p>
  );
};

export function SliderGroup({
  label,
  min,
  max,
  type = 'currency',
  options,
  value,
  onChange,
}: SliderGroupProps) {
  const sliderClass = value ? `${(parseInt(value) / max) * 100}%` : '';

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Label
          htmlFor="slider"
          className="font-brand text-xl text-gray-600 dark:text-white"
        >
          {label}
        </Label>
        <Select
          value={value}
          className="max-w-xs"
          onValueChange={onChange}
          id="slider"
        >
          {options.map((option, index) => (
            <SelectItem key={index} value={option.toString()}>
              {type === 'months'
                ? `${option} months`
                : option.toLocaleString('en-US', {
                    currency: 'usd',
                    style: 'currency',
                    minimumFractionDigits: 0,
                  })}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Slider width={sliderClass} />
      <div className="flex justify-between">
        <LabelForSlider type="min" value={min} sliderType={type} />
        <LabelForSlider type="max" value={max} sliderType={type} />
      </div>
    </div>
  );
}
