import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';

const UploadFile = () => {
  return (
    <View style={RNStyles.container}>
      <RNText style={styles.title}>{'Upload Files'}</RNText>
      <RNText size={FontSize.font12} color={Colors.Placeholder}>
        {
          'Allowed Extensions are PDF, JPG, PNG, GIF, DOC, DOCX, XLS, XLSX, PPT, PPTX, ZIP, RAR, MP4, Wmv, MSG.'
        }
      </RNText>
      <RNText size={FontSize.font12} color={Colors.Placeholder}>
        {'Max File size is 05 MB.'}
      </RNText>

      <RNButton
        title={'Upload Files'}
        style={styles.uploadFiles}
        textStyle={{ fontSize: FontSize.font12 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.font18,
    paddingVertical: hp(2),
    fontFamily: FontFamily.Medium,
  },
  uploadFiles: {
    backgroundColor: Colors.Primary2,
    paddingVertical: hp(1.2),
    marginTop: hp(2),
    borderRadius: wp(2),
  },
});

export default UploadFile;
