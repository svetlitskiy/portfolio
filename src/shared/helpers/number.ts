export const parseFloatOrNull = (value: unknown): number | null => {
  let result = null;
  if (typeof value === 'number') {
    result = value;
  }
  if (typeof value === 'string') {
    try {
      result = parseFloat(value);
    } catch (e) {
      console.error(e);
      result = null;
    }
  }

  if (typeof result === 'number' && !Number.isNaN(result)) {
    return result;
  } else {
    return null;
  }
};

export const parseFloatOrZero = (value: unknown) => {
  return parseFloatOrNull(value) || 0;
};

export const fromAppNumberFormat = (str: string, thousandSeparator: string, decimalSeparator: string): number => {
  const [integerPart, fractionalPart] = str.split(decimalSeparator);
  if (fractionalPart) {
    return parseFloatOrZero(`${integerPart.replaceAll(thousandSeparator, '')}.${fractionalPart}`);
  } else {
    return parseFloatOrZero(`${integerPart.replaceAll(thousandSeparator, '')}`);
  }
};

export const toAppNumberFormat = (
  value: number,
  thousandSeparator: string,
  decimalSeparator: string,
  precision: number,
): string => {
  const [integerPart, fractionalPart] = value.toFixed(precision).split('.');
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
  return fractionalPart !== undefined
    ? `${formattedIntegerPart}${decimalSeparator}${fractionalPart}`
    : formattedIntegerPart;
};
