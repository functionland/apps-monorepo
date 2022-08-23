/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useState } from 'react';
import {
  BoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
  TextProps,
  textRestyleFunctions,
  useRestyle,
} from '@shopify/restyle';
import { FxTheme } from '../theme/theme';
import { FxTextInputClasses } from '../theme/inputClasses';
import { TextInput, TextInputProps } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useFxTheme } from '../theme/useFxTheme';

type FxTextInputProps = TextProps<FxTheme> &
  BoxProps<FxTheme> &
  Omit<TextInputProps, 'placeholderTextColor' | 'selectionColor'> & {
    disabled?: boolean;
    error?: boolean;
    isBottomSheetInput?: boolean;
  };

type FxTextInputRestyleProps = Omit<FxTextInputProps, 'disabled' | 'error'>;

const restyleFunctions = composeRestyleFunctions<
  FxTheme,
  FxTextInputRestyleProps
>([...textRestyleFunctions, ...boxRestyleFunctions]);

const FxTextInput = ({ disabled, error, ...rest }: FxTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const variant = useMemo(() => {
    if (disabled) return 'disabled';
    else if (error) return 'error';
    else if (isFocused) return 'active';
    return 'default';
  }, [disabled, error, isFocused]);
  const { placeholderTextColor, selectionColor, textAlign, ...variantStyles } =
    FxTextInputClasses[variant];
  const { onFocus, onBlur, isBottomSheetInput, ...restyleProps } = useRestyle(
    restyleFunctions,
    {
      ...variantStyles,
      ...rest,
    }
  );
  const { colors } = useFxTheme();
  const Input = isBottomSheetInput ? BottomSheetTextInput : TextInput;

  return (
    <Input
      onFocus={(e) => {
        setIsFocused(true);
        if (onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
      }}
      editable={!disabled}
      placeholderTextColor={colors[placeholderTextColor]}
      selectionColor={colors[selectionColor]}
      blurOnSubmit
      {...restyleProps}
    />
  );
};

export { FxTextInput };
