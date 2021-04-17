import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './ProfileHeaderStyle';

export interface Props {
}

const ProfileHeader = (props: Props) =>  {

return (
    <View style={styles.container}>
      <Text>ProfileHeader Component</Text>
    </View>
)
};

export default ProfileHeader;
