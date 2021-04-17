import * as React from 'react';
import { TouchableOpacity, View, Text, Share } from "react-native"
import styles from './ShareCardStyle';

export interface Props {
  // source: any
  color: string
  title: string
  description: string
}


class ShareCard extends React.PureComponent <Props> {
  constructor(props:Props){
    super(props);
  }

  onShare = async () => {
    // const link = this.props.advert.link;
    // const advertTitle = this.props.advert.title;
    // const dynamicLink = await Firebase.createLink(link, advertTitle);
    const title = `${this.props.title} | \n`;
    await Share.share({
      message: title + this.props.description,
    });
  };

  public render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.onShare}
        style={styles.container}>
        <View style={{flex:0.7, justifyContent:'flex-start',alignItems:'flex-start'}}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <Text style={styles.description}>
            {this.props.description}
          </Text>
        </View>
        <View style={styles.separator}/>
        <Text style={[styles.share, {color: this.props.color}]}>
          {'Share'}
        </Text>
      </TouchableOpacity>
    );
  }
}
export default ShareCard;
