import * as React from 'react';
import { ActivityIndicator, Text, View } from "react-native"
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Measure } from "../../types/classes"
import { Colors, Metrics } from "../../themes"
import styles from './GraphStyle'
import { getColors } from "../../transforms/Utils"
export interface Props {
  measures: Measure[]
}

export interface State{
  index: {type:string,value: number}
  color: string
}


class Graph extends React.PureComponent <Props, State> {
  constructor(props:Props){
    super(props);
    this.state={
      index: {type: 'NO2', value: this.props.measures ? this.props.measures[0].NO2: null},
      color: '#8800cc'
    }
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any){
    return this.props.measures!==nextProps.measures || this.props.measures.length !== nextProps.measures.length
  }

  render() {
    // if(this.props.measures.length <=0){
    //   return <ActivityIndicator size={"large"}/>
    // }
    const measures =[];
    this.props.measures.forEach(measure=>{
      measures.push({
        NO2: measure.NO2,
        PM10: measure.PM10,
        SO2: measure.SO2,
        PM25: measure.PM25,
        O3: measure.O3,
        date:measure.date
      })
    })
    const data = measures
    const colors = [this.state.color, '#aa00ff', '#bb66ff','#cc66ff','#dd66ff']
    const keys = ['NO2','PM10','SO2','PM25','O3']
    const svgs = [
      { onPress: () => this.setState({index: {type:'NO2', value:this.props.measures[0].NO2}}) },
      { onPress: () => this.setState({index: {type:'PM10', value:this.props.measures[0].PM10}}) },
      { onPress: () => this.setState({index: {type:'SO2', value:this.props.measures[0].SO2}}) },
      { onPress: () => this.setState({index: {type:'PM25', value:this.props.measures[this.props.measures.length-1].PM25}}) },
      { onPress: () => this.setState({index: {type:'O3', value:this.props.measures[0].O3}}) },
    ]

    return (
      <View style={{flex:1,justifyContent:'space-between'}}>
        <View style={{alignSelf:'center', marginTop:Metrics.moderateScale._30, justifyContent:'center',alignItems:'center'}}>
          <AnimatedCircularProgress
            size={160}
            width={17}
            fill={this.state.index.value/2}
            duration={1500}
            tintColor={getColors(this.state.index.value).primaryColor}
            backgroundColor={Colors.grayBlue}
            rotation={0}
          >
            {
              (fill) =>
                <Text style={{fontSize:Metrics.moderateScale._22, fontWeight:'bold'}}>{this.state.index.value}</Text>
            }
          </AnimatedCircularProgress>
          <View style={{flexDirection:'row', justifyContent:'space-around', width: Metrics.width, marginTop: Metrics.moderateScale._22}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.value}>20</Text>
              <Text style={styles.label}>min</Text>
            </View>
            <Text style={styles.index}>{this.state.index.type}</Text>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.value}>36</Text>
              <Text style={styles.label}>max</Text>
            </View>
          </View>
        </View>
        <View>
          <StackedAreaChart
            style={{ height: 300 }}
            data={data}
            keys={keys}
            colors={colors}
            curve={shape.curveNatural}
            showGrid={false}
            svgs={svgs}
          />
        </View>
      </View>
    )
  }
}
export default Graph;
