import React from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  Platform,
  View,
  ViewProps,
  TextProps,
} from 'react-native'
import { useTheme } from './CountryTheme'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 38,
    marginBottom: 6,
    flexDirection: 'column',
    alignItem: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomColor: '#FDEFEC',
  },
  headingText: {
    color: 'black',
    fontWeight: '600',
    lineHeight: 27,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputContainer: {
    marginTop: 6,
    marginBottom: 16,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 50,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#FDEFEC',
    borderRadius: 6,
    fontWeight: '500',
    lineHeight: 23,
    fontSize: 17,
    padding: 10,
    marginTop: 16,
    ...Platform.select({
      web: {
        outlineWidth: 1,
        outlineColor: 'transparent',
        outlineOffset: 0,
      },
    }),
  },
})

export type CountryFilterProps = TextInputProps &
  ViewProps &
  TextProps & { heading: string }

export const CountryFilter = (props: CountryFilterProps) => {
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor,
    headingFontSize,
    headingTextColor,
  } = useTheme()
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.headingText,
          { fontFamily, fontSize: headingFontSize, color: headingTextColor },
        ]}
      >
        {props.heading}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          testID='text-input-country-filter'
          autoCorrect={false}
          placeholderTextColor={filterPlaceholderTextColor}
          style={[
            styles.input,
            { fontFamily, fontSize, color: onBackgroundTextColor },
          ]}
          {...props}
        />
      </View>
    </View>
  )
}

CountryFilter.defaultProps = {
  autoFocus: false,
  placeholder: 'Search',
  heading: 'Country/Region',
  headingTextColor: '#1A0D09',
  headingFontSize: 20,
}
