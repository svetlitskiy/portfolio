'use client';

import React, { useEffect, useRef } from 'react';
import { Form, Formik } from 'formik';
import { Typography } from '@mui/material';
import * as yup from 'yup';
import { parseFloatOrZero } from '@/shared/helpers/number';
import FloatNumberInput from '@/components/float-number-input';
import { i18nNumberFormatInterface } from '@/i18n/i18n.interface';

interface FormInterface {
  base: number | null;
  rem: number | null;
  px: number | null;
}

const precision = 4;

const RemToPxConverter = ({ numberFormat }: { numberFormat: i18nNumberFormatInterface }) => {
  const initialValues: FormInterface = {
    base: 16,
    rem: null,
    px: null,
  };

  const validationSchema = yup.object({
    base: yup.number().required(),
    rem: yup.number().required(),
    px: yup.number().required(),
  });

  const activeFormElement = useRef<keyof FormInterface | null>(null);

  const onSubmit = async ({ rem, px }: FormInterface): Promise<void> => {
    console.log('values', rem, px);
  };

  const HandleValueChange = (
    values: FormInterface,
    setFieldValue: (field: keyof FormInterface, value: null | number, shouldValidate?: boolean) => void,
  ) => {
    useEffect(() => {
      const base = parseFloatOrZero(values.base);

      if (activeFormElement.current === 'rem') {
        setFieldValue('px', parseFloatOrZero(values.rem) * base, false);
      } else if (activeFormElement.current === 'px') {
        setFieldValue('rem', parseFloatOrZero(values.px) / base, false);
      } else if (activeFormElement.current === 'base') {
        setFieldValue('px', parseFloatOrZero(values.rem) * base, false);
      }
    }, [values.rem, values.px, values.base, setFieldValue]);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values, setFieldValue }) => {
        HandleValueChange(values, setFieldValue);

        return (
          <Form className="flex flex-col gap-4">
            <div className="flex flex-row justify-center items-center gap-2">
              <FloatNumberInput
                label="Base Font Size"
                value={values.base}
                size="small"
                variant="standard"
                numberFormat={numberFormat}
                className="w-[120px]"
                minValue={0}
                precision={2}
                onChange={(value) => setFieldValue('base', value)}
                onFocus={() => (activeFormElement.current = 'base')}
                onBlur={() => (activeFormElement.current = null)}
              />
            </div>

            <div className="flex-auto flex flex-row gap-2 justify-center">
              <FloatNumberInput
                label="REM Value"
                value={values.rem}
                precision={precision}
                numberFormat={numberFormat}
                minValue={0}
                onChange={(value) => setFieldValue('rem', value)}
                onFocus={() => (activeFormElement.current = 'rem')}
                onBlur={() => (activeFormElement.current = null)}
              />

              <FloatNumberInput
                label="PX Value"
                value={values.px}
                precision={precision}
                numberFormat={numberFormat}
                minValue={0}
                onChange={(value) => setFieldValue('px', value)}
                onFocus={() => (activeFormElement.current = 'px')}
                onBlur={() => (activeFormElement.current = null)}
              />
            </div>

            <div className="flex flex-row justify-center">
              <Typography variant="body1" align="left">
                {values.rem}rem = {values.px}px
              </Typography>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RemToPxConverter;
