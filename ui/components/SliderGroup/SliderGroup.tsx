import { useState } from 'react';
import { Select, SelectItem } from '#/ui/components/Select';
import { Slider } from './Slider';

type LabelForSliderProps = {
  type: 'min' | 'max';
  labelText: string;
};

const LabelForSlider = ({ type, labelText }: LabelForSliderProps) => {
  return (
    <p className="text-gray-500 dark:text-gray-200">
      {labelText}{' '}
      <span className="dark:text-brand-secondary capitalize text-gray-400">
        / {type}
      </span>
    </p>
  );
};

type SliderGroupProps = {
  label: string;
  minLabel: string;
  maxLabel: string;
  options: { value: string; label: string; default?: boolean }[];
};

export function SliderGroup({
  label,
  minLabel,
  maxLabel,
  options,
}: SliderGroupProps) {
  const defaultValue = options.find((option) => option.default)?.value;
  const [value, setValue] = useState(defaultValue);
  const sliderClass = value
    ? `${(parseInt(value) / options.length) * 100}%`
    : '';

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        {/* Todo: change to label for select */}
        <p className="font-brand  text-gray-600 dark:text-white">{label}</p>
        <Select
          defaultValue={value}
          className="max-w-xs"
          onValueChange={setValue}
        >
          {options.map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Slider width={sliderClass} />
      <div className="flex justify-between">
        <LabelForSlider type="min" labelText={minLabel} />
        <LabelForSlider type="max" labelText={maxLabel} />
      </div>
    </div>
  );
}
