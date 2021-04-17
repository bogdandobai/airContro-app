import * as React from 'react';
import { View } from "react-native"
import styles from './DocumentCardStyle';
import { Card, IconButton, Paragraph, Title } from "react-native-paper"
import { Colors } from "../../themes"
import NavigationService from "../../navigation/NavigationService"

export interface Props {
  title: string
  subtitle: string
  content: string
  url: string
  image: string
}


class DocumentCard extends React.PureComponent <Props> {
  constructor(props:Props){
    super(props);
}
  public render() {
    return (
      <View style={styles.container}>
        <Card style={{marginTop:50, marginHorizontal:22}}>
          <Card.Cover source={{ uri: this.props.image}} />
          <Card.Title title={this.props.title} />
          <Card.Content>
            <Title>{this.props.subtitle}</Title>
            <Paragraph>{this.props.content}</Paragraph>
          </Card.Content>
          <Card.Actions style={{justifyContent:'flex-end'}}>
            <IconButton
              icon="arrow-right"
              color={Colors.black}
              size={20}
              style={{alignSelf: 'flex-end'}}
              onPress={()=>NavigationService.navigate("Document",{url:this.props.url})}
            />
          </Card.Actions>
        </Card>
      </View>
    );
  }
}
export default DocumentCard;
