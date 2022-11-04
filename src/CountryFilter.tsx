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
import arrow_left from './assets/images/arrow_left.png'

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
    height: 48,
    width: DEVICE_WIDTH - 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 14,
    marginBottom: 16,
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

  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  headingTextContainer: {
    flex: 1,
    alignSelf: 'center',
    paddingRight: 40,
  },

  backIconContainer: {
    paddingLeft: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },

  backIcon: {
    width: 24,
    height: 24,
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

  const handelClear = () => {
    if (typeof props.onChangeText === 'function') {
      props.onChangeText('')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={onCloseButtonPress}
        >
          <Image
            source={arrow_left}
            style={styles.backIcon}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <View style={styles.headingTextContainer}>
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
        </View>
      </View>
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
          onPress={handelClear}
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
