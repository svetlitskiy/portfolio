import { MaskitoOptions } from '@maskito/core';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import React, { FocusEventHandler, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { InputAdornment, TextField } from '@mui/material';

import { i18nNumberFormatInterface } from '@/i18n/i18n.interface';
import { fromAppNumberFormat, toAppNumberFormat } from '@/shared/helpers/number';
import { stringOrEmpty } from '@/shared/helpers/string';

interface CurrencyInputProps {
  precision: number;
  label: string;
  numberFormat: i18nNumberFormatInterface;
  maxValue?: number;
  minValue?: number;
  onChange: (value: number | null) => void;
  value: number | null;
  helperText?: string;
  editable?: boolean;
  postfix?: React.ReactNode;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  variant?: 'outlined' | 'standard' | 'filled';
  size?: 'small' | 'medium';
  className?: string;
}

const FloatNumberInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  (
    {
      helperText,
      postfix,
      precision,
      onChange,
      value,
      label,
      minValue = Number.MIN_VALUE,
      maxValue = Number.MAX_VALUE,
      numberFormat: { thousandSeparator, decimalSeparator },
      onFocus,
      onBlur,
      variant = 'outlined',
      size = 'medium',
      className,
      editable = true,
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLInputElement | null>(null);
    const [internalValue, setInternalValue] = useState<string | null>(null);

    const numberMask: MaskitoOptions = maskitoNumberOptionsGenerator({
      precision: precision,
      min: minValue,
      max: maxValue,
      decimalSeparator,
      thousandSeparator,
    });

    const maskitoRef = useMaskito({
      options: {
        ...numberMask,
        preprocessors: [
          (data) => {
            if (!editable) {
              return { ...data, elementState: { ...data.elementState, value: internalValue! } };
            }

            updateValue(data.elementState.value);

            return data;
          },
        ],
      },
    });

    const updateValue = (val: string) => {
      if (val === '') {
        onChange?.(null);
        setInternalValue(null);
        return;
      }
      let numberValue: number;
      try {
        numberValue = fromAppNumberFormat(val, thousandSeparator, decimalSeparator);
        if (value === null || numberValue !== value) {
          onChange?.(numberValue);
          setInternalValue(val);
        }
      } catch (error) {
        console.warn(error);
      }
    };

    useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

    useEffect(() => {
      if (typeof value === 'number') {
        const val1 = value;
        const val2 = internalValue ? fromAppNumberFormat(internalValue, thousandSeparator, decimalSeparator) : 0;
        if (val1 !== val2) {
          setInternalValue(toAppNumberFormat(val1, thousandSeparator, decimalSeparator, precision));
        } else if (val1 === 0 && !internalValue) {
          setInternalValue(toAppNumberFormat(val1, thousandSeparator, decimalSeparator, precision));
        }
      }

      if (value === null && internalValue !== null) {
        setInternalValue(null);
      }
    }, [value, decimalSeparator, precision, thousandSeparator]);

    return (
      <TextField
        label={label}
        className={className}
        inputRef={(e) => {
          maskitoRef(e);
          internalRef.current = e;
        }}
        value={stringOrEmpty(internalValue)}
        onFocus={onFocus}
        onBlur={onBlur}
        helperText={helperText}
        variant={variant}
        size={size}
        InputProps={{
          inputMode: 'decimal',
          autoComplete: 'off',
          endAdornment: <InputAdornment position="end">{postfix}</InputAdornment>,
        }}
      />
    );
  },
);

FloatNumberInput.displayName = 'FloatNumberInput';

export default FloatNumberInput;
