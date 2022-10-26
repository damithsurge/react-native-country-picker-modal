import { TextInputProps, ViewProps, TextProps } from 'react-native';
export declare type CountryFilterProps = TextInputProps & ViewProps & TextProps & {
    filterHeading: string;
    onClose?(): void;
};
export declare const CountryFilter: {
    (props: CountryFilterProps): JSX.Element;
    defaultProps: {
        autoFocus: boolean;
        placeholder: string;
        filterHeading: string;
        filterHeadingTextColor: string;
        filterHeadingFontSize: number;
    };
};
