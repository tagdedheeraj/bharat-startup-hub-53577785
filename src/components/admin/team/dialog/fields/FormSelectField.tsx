
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UseFormReturn } from 'react-hook-form';

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectFieldProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
  required?: boolean;
}

const FormSelectField: React.FC<FormSelectFieldProps> = ({
  form,
  name,
  label,
  placeholder,
  options,
  required = false
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      rules={{ required: required ? `${label} is required` : false }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSelectField;
