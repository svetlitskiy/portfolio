'use client';

import React, { useEffect, useRef } from 'react';
import { Form, Formik } from 'formik';
import { IconButton, Slider, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { parseFloatOrZero } from '@/shared/helpers/number';
import FloatNumberInput from '@/components/float-number-input';
import { i18nHexToRGBConvertorFormInterface, i18nNumberFormatInterface } from '@/i18n/i18n.interface';
import { useCopyToClipboard } from 'react-use';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface FormInterface {
  hex: string | null;
  red: number | null;
  redSlider: number | null;
  green: number | null;
  greenSlider: number | null;
  blue: number | null;
  blueSlider: number | null;
  opacity: number | null;
  opacitySlider: number | null;
}

const hexColorRegex = /^#?([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;

const HexToRgbConverter = ({
  numberFormat,
  labels,
}: {
  numberFormat: i18nNumberFormatInterface;
  labels: i18nHexToRGBConvertorFormInterface;
}) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const initialValues: FormInterface = {
    hex: '#ffffff',
    red: 255,
    redSlider: 255,
    green: 255,
    greenSlider: 255,
    blue: 255,
    blueSlider: 255,
    opacity: 1,
    opacitySlider: 1,
  };

  const prevFormValues = useRef<FormInterface>(initialValues);

  const validationSchema = yup.object({
    hex: yup.string().matches(hexColorRegex, 'Invalid HEX color format').required('HEX color is required'),
    red: yup.number().integer().min(0).max(255).required(),
    green: yup.number().integer().min(0).max(255).required(),
    blue: yup.number().integer().min(0).max(255).required(),
    opacity: yup.number().min(0).max(1).required(),
  });

  const activeFormElement = useRef<keyof FormInterface | null>(null);

  const onSubmit = async (): Promise<void> => {
    // do nothing
  };

  const rgbaToHex = (r: number, g: number, b: number, a: number | undefined): string => {
    const toHex = (value: number) => {
      const hex = Math.round(value).toString(16).padStart(2, '0');
      return hex.toUpperCase();
    };

    const alpha = toHex((a || 1) * 255);

    return `#${toHex(r)}${toHex(g)}${toHex(b)}${a ? alpha : ''}`;
  };

  const parseHexColor = (h: string) => {
    const hex = String(h).replace(/^#/, '');

    // Проверка на корректность символов HEX
    if (!/^[0-9A-Fa-f]{3,8}$/.test(hex)) {
      throw new Error('Invalid HEX color format: contains invalid characters');
    }

    let r,
      g,
      b,
      a = 1; // По умолчанию альфа = 1 (непрозрачный)

    if (hex.length === 3 || hex.length === 4) {
      // Формат #RGB или #RGBA → #RRGGBB или #RRGGBBAA
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
      if (hex.length === 4) a = Math.ceil((100 * parseInt(hex[3] + hex[3], 16)) / 255) / 100; // Нормализация альфа-канала
    } else if (hex.length === 6 || hex.length === 8) {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
      if (hex.length === 8) a = Math.ceil((100 * parseInt(hex.slice(6, 8), 16)) / 255) / 100; // Нормализация альфа-канала
    } else {
      throw new Error('Invalid HEX color format: unexpected length');
    }

    return { r, g, b, a };
  };

  const HandleValueChange = (
    values: FormInterface,
    setValues: (values: React.SetStateAction<FormInterface>, shouldValidate?: boolean) => void,
  ) => {
    useEffect(() => {
      let hex = values.hex;
      let red = parseFloatOrZero(values.red);
      let green = parseFloatOrZero(values.green);
      let blue = parseFloatOrZero(values.blue);
      let opacity = parseFloatOrZero(values.opacity);

      let redSlider = parseFloatOrZero(values.redSlider);
      let greenSlider = parseFloatOrZero(values.greenSlider);
      let blueSlider = parseFloatOrZero(values.blueSlider);
      let opacitySlider = parseFloatOrZero(values.opacitySlider);

      if (activeFormElement.current === 'hex') {
        try {
          const { r, g, b, a } = parseHexColor(hex);
          red = r;
          redSlider = r;
          green = g;
          greenSlider = g;
          blue = b;
          blueSlider = b;
          opacity = a;
          opacitySlider = a;
        } catch (e) {
          console.warn('Wrong data in hex field', e);
        }
      }

      if (
        typeof activeFormElement.current === 'string' &&
        ['red', 'green', 'blue', 'opacity'].includes(activeFormElement.current)
      ) {
        hex = rgbaToHex(red, green, blue, opacity);
        redSlider = red;
        greenSlider = green;
        blueSlider = blue;
        opacitySlider = opacity;
      }

      if (
        typeof activeFormElement.current === 'string' &&
        ['redSlider', 'greenSlider', 'blueSlider', 'opacitySlider'].includes(activeFormElement.current)
      ) {
        hex = rgbaToHex(redSlider, greenSlider, blueSlider, opacitySlider);
        red = redSlider;
        green = greenSlider;
        blue = blueSlider;
        opacity = opacitySlider;
        activeFormElement.current = null;
      }

      const newValues: Partial<FormInterface> = Object.fromEntries(
        Object.entries({
          ...values,
          hex,
          red,
          green,
          blue,
          opacity,
          redSlider,
          greenSlider,
          blueSlider,
          opacitySlider,
        }).filter(([key]) => key !== activeFormElement.current),
      ) as Partial<FormInterface>;
      const prevValues: Partial<FormInterface> = Object.fromEntries(
        Object.entries(prevFormValues.current).filter(([key]) => key !== activeFormElement.current),
      ) as Partial<FormInterface>;

      if (JSON.stringify(newValues) === JSON.stringify(prevValues)) {
        return;
      }

      setValues({ ...values, ...newValues });
      prevFormValues.current = { ...values, ...newValues };
    }, [values, setValues]);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values, setFieldValue, setValues, errors }) => {
        HandleValueChange(values, setValues);

        return (
          <Form className="flex flex-col gap-4">
            <div className="flex-auto flex flex-col gap-2 items-center">
              <TextField
                label={labels.hex.label}
                value={values.hex}
                onChange={(value) => setFieldValue('hex', value.target.value)}
                onFocus={() => (activeFormElement.current = 'hex')}
                onBlur={() => (activeFormElement.current = null)}
                error={errors?.hex}
              />
              {errors?.hex && <Typography variant="body2">{errors?.hex}</Typography>}
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white p-2 flex flex-col gap-2 w-[320px]">
                <div
                  className="flex flex-row items-center justify-between gap-1 p-2"
                  style={{ backgroundColor: `rgb(${values.red},${values.green},${values.blue})` }}
                >
                  <Typography variant="body1">{rgbaToHex(values.red, values.green, values.blue)}</Typography>
                  <IconButton
                    aria-label="copy"
                    onClick={() => copyToClipboard(rgbaToHex(values.red, values.green, values.blue))}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </div>
                <div
                  className="flex flex-row items-center justify-between gap-1 p-2"
                  style={{ backgroundColor: `rgba(${values.red},${values.green},${values.blue},${values.opacity})` }}
                >
                  <Typography variant="body1">
                    {rgbaToHex(values.red, values.green, values.blue, values.opacity)}
                  </Typography>
                  <IconButton
                    aria-label="copy"
                    onClick={() => copyToClipboard(rgbaToHex(values.red, values.green, values.blue, values.opacity))}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </div>
                <div
                  className="flex flex-row items-center justify-between gap-1 p-2"
                  style={{ backgroundColor: `rgb(${values.red},${values.green},${values.blue})` }}
                >
                  <Typography variant="body1">
                    rgb({values.red},{values.green},{values.blue})
                  </Typography>
                  <IconButton
                    aria-label="copy"
                    onClick={() => copyToClipboard(`rgb(${values.red},${values.green},${values.blue})`)}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </div>
                <div
                  className="flex flex-row items-center justify-between gap-1 p-2"
                  style={{ backgroundColor: `rgba(${values.red},${values.green},${values.blue},${values.opacity})` }}
                >
                  <Typography variant="body1">
                    rgba({values.red},{values.green},{values.blue},{values.opacity})
                  </Typography>
                  <IconButton
                    aria-label="copy"
                    onClick={() =>
                      copyToClipboard(`rgba(${values.red},${values.green},${values.blue},${values.opacity})`)
                    }
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-row gap-2">
              <div className="flex flex-col gap-6 justify-center items-center">
                <FloatNumberInput
                  label={labels.red.label}
                  value={values.red}
                  size="small"
                  variant="outlined"
                  numberFormat={numberFormat}
                  minValue={0}
                  maxValue={255}
                  precision={0}
                  onChange={(value) => setFieldValue('red', value)}
                  onFocus={() => (activeFormElement.current = 'red')}
                  onBlur={() => (activeFormElement.current = null)}
                />

                <Slider
                  sx={{ height: 150 }}
                  size="small"
                  min={0}
                  max={255}
                  orientation="vertical"
                  aria-label={labels.red.label}
                  onChange={(event, value) => {
                    activeFormElement.current = 'redSlider';
                    setFieldValue('redSlider', value);
                  }}
                  value={values.redSlider}
                  valueLabelDisplay="auto"
                />
              </div>

              <div className="flex flex-col gap-6 justify-center items-center">
                <FloatNumberInput
                  label={labels.green.label}
                  value={values.green}
                  size="small"
                  variant="outlined"
                  numberFormat={numberFormat}
                  minValue={0}
                  maxValue={255}
                  precision={0}
                  onChange={(value) => setFieldValue('green', value)}
                  onFocus={() => (activeFormElement.current = 'green')}
                  onBlur={() => (activeFormElement.current = null)}
                />
                <Slider
                  sx={{ height: 150 }}
                  size="small"
                  min={0}
                  max={255}
                  orientation="vertical"
                  aria-label={labels.green.label}
                  onChange={(event, value) => {
                    activeFormElement.current = 'greenSlider';
                    setFieldValue('greenSlider', value);
                  }}
                  value={values.greenSlider}
                  valueLabelDisplay="auto"
                />
              </div>
              <div className="flex flex-col gap-6 justify-center items-center">
                <FloatNumberInput
                  label={labels.blue.label}
                  value={values.blue}
                  size="small"
                  variant="outlined"
                  numberFormat={numberFormat}
                  minValue={0}
                  maxValue={255}
                  precision={0}
                  onChange={(value) => setFieldValue('blue', value)}
                  onFocus={() => (activeFormElement.current = 'blue')}
                  onBlur={() => (activeFormElement.current = null)}
                />
                <Slider
                  sx={{ height: 150 }}
                  size="small"
                  min={0}
                  max={255}
                  orientation="vertical"
                  aria-label={labels.blue.label}
                  onChange={(event, value) => {
                    activeFormElement.current = 'blueSlider';
                    setFieldValue('blueSlider', value);
                  }}
                  value={values.blueSlider}
                  valueLabelDisplay="auto"
                />
              </div>

              <div className="flex flex-col gap-6 justify-center items-center">
                <FloatNumberInput
                  label={labels.opacity.label}
                  value={values.opacity}
                  size="small"
                  variant="outlined"
                  numberFormat={numberFormat}
                  minValue={0}
                  maxValue={1}
                  precision={2}
                  onChange={(value) => setFieldValue('opacity', value)}
                  onFocus={() => (activeFormElement.current = 'opacity')}
                  onBlur={() => (activeFormElement.current = null)}
                />
                <Slider
                  sx={{ height: 150 }}
                  size="small"
                  min={0}
                  step={0.01}
                  max={1}
                  orientation="vertical"
                  aria-label={labels.opacity.label}
                  onChange={(event, value) => {
                    activeFormElement.current = 'opacitySlider';
                    setFieldValue('opacitySlider', value);
                  }}
                  value={values.opacitySlider}
                  valueLabelDisplay="auto"
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default HexToRgbConverter;
