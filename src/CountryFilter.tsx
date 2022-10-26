import React from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  Platform,
  View,
  Image,
  ViewProps,
  TextProps,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { useTheme } from './CountryTheme'
import close_icon_red from './assets/images/close_icon_red.png'
import search_icon from './assets/images/search_icon.png'

const { width: DEVICE_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 6,
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
    flexDirection: 'row',
    height: 50,
    width: DEVICE_WIDTH - 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 14,
    marginBottom: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#F8C2B4',
    borderRadius: 6,
  },
  input: {
    width: '100%',
    alignSelf: 'center',
    fontWeight: '500',
    lineHeight: 23,
    fontSize: 17,
    padding: 10,
    ...Platform.select({
      web: {
        outlineWidth: 1,
        outlineColor: 'transparent',
        outlineOffset: 0,
      },
    }),
  },

  leftIconContainer: {
    marginLeft: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  leftIcon: {
    width: 20,
    height: 20,
  },

  rightIconContainer: {
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  rightIcon: {
    width: 20,
    height: 20,
  },
})

export type CountryFilterProps = TextInputProps &
  ViewProps &
  TextProps & { filterHeading: string; onClose?(): void }

export const CountryFilter = (props: CountryFilterProps) => {
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor,
    filterHeadingFontSize,
    filterHeadingTextColor,
  } = useTheme()

  const onCloseButtonPress = () => {
    if (typeof props.onClose === 'function') {
      props.onClose()
    }
  }
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.headingText,
          {
            fontFamily,
            fontSize: filterHeadingFontSize,
            color: filterHeadingTextColor,
          },
        ]}
      >
        {props.filterHeading}
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.leftIconContainer}>
          <Image
            source={search_icon}
            style={styles.leftIcon}
            resizeMode='contain'
          />
        </View>
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
        <TouchableOpacity
          style={styles.rightIconContainer}
          onPress={onCloseButtonPress}
        >
          <Image
            source={close_icon_red}
            style={styles.rightIcon}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

CountryFilter.defaultProps = {
  autoFocus: false,
  placeholder: 'Search',
  filterHeading: 'Country/Region',
  filterHeadingTextColor: '#1A0D09',
  filterHeadingFontSize: 20,
}
