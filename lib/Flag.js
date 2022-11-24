import React, { memo } from 'react';
import { Emoji } from './Emoji';
import { useContext } from './CountryContext';
import { useAsync } from 'react-async-hook';
import * as flag from './assets/countryFlags/';
import { Image, StyleSheet, PixelRatio, Text, View, ActivityIndicator, } from 'react-native';
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        marginRight: 10,
    },
    emojiFlag: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1 / PixelRatio.get(),
        borderColor: 'transparent',
        backgroundColor: 'transparent',
    },
    imageFlag: {
        resizeMode: 'contain',
        width: 28,
        height: 23,
        borderWidth: 1 / PixelRatio.get(),
        opacity: 0.8,
    },
});
const getCountryFlagImage = (countryCode) => {
    let formattedCode = countryCode;
    switch (countryCode) {
        case 'IN':
            formattedCode = 'IND';
            break;
        case 'DO':
            formattedCode = 'DOM';
            break;
    }
    return flag[formattedCode.toLowerCase()];
};
const ImageFlag = memo(({ countryCode, flagSize }) => {
    const { getImageFlagAsync } = useContext();
    const asyncResult = useAsync(getImageFlagAsync, [countryCode]);
    if (asyncResult.loading) {
        return React.createElement(ActivityIndicator, { size: 'small' });
    }
    return (React.createElement(Image, { resizeMode: 'contain', style: [
            styles.imageFlag,
            { borderColor: 'transparent', height: flagSize },
        ], source: getCountryFlagImage(countryCode) }));
});
const EmojiFlag = memo(({ countryCode, flagSize }) => {
    const { getEmojiFlagAsync } = useContext();
    const asyncResult = useAsync(getEmojiFlagAsync, [countryCode]);
    if (asyncResult.loading) {
        return React.createElement(ActivityIndicator, { size: 'small' });
    }
    return (React.createElement(Text, { style: [styles.emojiFlag, { fontSize: flagSize }], allowFontScaling: false },
        React.createElement(Emoji, Object.assign({}, { name: asyncResult.result }))));
});
export const Flag = ({ countryCode, withEmoji, withFlagButton, flagSize, }) => withFlagButton ? (React.createElement(View, { style: styles.container }, withEmoji ? (React.createElement(EmojiFlag, Object.assign({}, { countryCode, flagSize }))) : (React.createElement(ImageFlag, Object.assign({}, { countryCode, flagSize }))))) : null;
Flag.defaultProps = {
    withEmoji: false,
    withFlagButton: true,
};
//# sourceMappingURL=Flag.js.map