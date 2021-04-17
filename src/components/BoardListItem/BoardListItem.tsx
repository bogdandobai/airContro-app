import * as React from "react"
import { Text, View } from "react-native"
import styles from "./BoardListItemStyle"
import { City } from "../../types/classes"
import { getColors } from "../../transforms/Utils"
import { Colors } from "../../themes"

interface Props {
  item: City
}

class BoardListItem extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  renderImage = () => {
    const colors = getColors(this.props.item.index)
    if(colors.primaryColor === Colors.lightBlue){
      return (
        <View style={styles.dotContainer}>
        <View style={[styles.dot,{backgroundColor:colors.primaryColor}]}/>
        </View>
      )}
      else if(colors.primaryColor === Colors.purple){
        return(
          <View style={styles.dotContainer}>
            <View style={[styles.dot,{backgroundColor:colors.primaryColor}]}/>
            <View style={[styles.dot,{backgroundColor:colors.primaryColor}]}/>
          </View>
        )
      }else {
        return(
          <View style={styles.dotContainer}>
            <View style={[styles.dot,{backgroundColor:colors.primaryColor}]}/>
            <View style={[styles.dot,{backgroundColor:colors.primaryColor}]}/>
            <View style={[styles.dot,{backgroundColor:colors.primaryColor}]}/>
          </View>
        )
    }
  }

  public render() {
    const city = { ...this.props.item }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{city.name}</Text>
        <Text style={styles.index}>{city.index}</Text>
        {this.renderImage()}
      </View>
    )
  }
}
export default BoardListItem
