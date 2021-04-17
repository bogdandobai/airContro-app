import * as React from 'react';
import { ScrollView  } from "react-native"
import { connect } from 'react-redux';
import * as Redux from 'redux';
import * as Types from '../../store/state';
import DocumentCard from "../../components/DocumentCard"
import styles from './DocsStyle'
/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {}

/**
 * The properties mapped from the global state
 */
export interface StateProps {}

type Props = StateProps & DispatchProps & OwnProps;

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


class Docs extends React.PureComponent <Props> {
  constructor(props:Props){
    super(props)
  }


  public render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <DocumentCard
          image={"https://s.yimg.com/uu/api/res/1.2/Ip7hc6Lr7RBD_lkJgYBNqQ--~B/aD0yNjI0O3c9MzkzNjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-04/c2f6bc30-83e9-11ea-8b5f-63a32c280eb6"}
          title={'AQI'}
          subtitle={"What is AQI ?"}
          content={"An air quality index (AQI) is used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become. Public health risks increase as the AQI rises. Different countries have their own air quality indices, corresponding to different national air quality standards. Some of these are the Air Quality Health Index (Canada), the Air Pollution Index (Malaysia), and the Pollutant Standards Index (Singapore)."}
          url={"https://en.wikipedia.org/wiki/Air_quality_index"}
        />
        <DocumentCard
          image={"https://www.aeroqual.com/wp-content/uploads/air-monitoring-challenges-with-electrochemical-NO2-sensors.jpg"}
          title={'NO2'}
          subtitle={"Nitrogen Dioxide"}
          content={"Nitrogen dioxide is a chemical compound with the formula NO2. It is one of several nitrogen oxides. NO2 is an intermediate in the industrial synthesis of nitric acid, millions of tons of which are produced each year for use primarily in the production of fertilizers. At higher temperatures it is a reddish-brown gas. Nitrogen dioxide is a paramagnetic, bent molecule with C2v point group symmetry."}
          url={"https://en.wikipedia.org/wiki/Nitrogen_dioxide"}
        />
        <DocumentCard
          image={"https://media.istockphoto.com/vectors/vector-artistic-drawing-illustration-of-city-covered-by-smog-and-so2-vector-id1063649626"}
          title={'SO2'}
          subtitle={"Sulfur dioxide"}
          content={"Sulfur dioxide (also sulphur dioxide in British English) is the chemical compound with the formula SO2. It is a toxic gas responsible for the smell of burnt matches. It is released naturally by volcanic activity and is produced as a by-product of copper extraction and the burning of fossil fuels contaminated with sulfur compounds."}
          url={"https://en.wikipedia.org/wiki/Sulfur_dioxide"}
        />
        <DocumentCard
          image={"https://i.ytimg.com/vi/eg6nc_IyaZY/maxresdefault.jpg"}
          title={'O3'}
          subtitle={"Ozone"}
          content={"Ozone is an inorganic molecule, a pale blue gas with a distinctively pungent smell. It is an allotrope of oxygen that is much less stable than the diatomic allotrope O2, breaking down in the lower atmosphere to O2 (dioxygen). Ozone is formed from dioxygen by the action of ultraviolet (UV) light and electrical discharges within the Earth's atmosphere. It is present in very low concentrations throughout the latter, with its highest concentration high in the ozone layer of the stratosphere, which absorbs most of the Sun's ultraviolet (UV) radiation."}
          url={"https://en.wikipedia.org/wiki/Ozone"}
        />
        <DocumentCard
          image={"https://smartairfilters.com/wordpress/wp-content/uploads/2017/11/Particle-Sizes-Virus-Labelled.jpg"}
          title={'PM10 and PM2.5'}
          subtitle={"Particulates"}
          content={"Particulates – also known as atmospheric aerosol particles, atmospheric particulate matter, particulate matter (PM), or suspended particulate matter (SPM) – are microscopic particles of solid or liquid matter suspended in the air. The term aerosol commonly refers to the particulate/air mixture, as opposed to the particulate matter alone. Sources of particulate matter can be natural or anthropogenic. They have impacts on climate and precipitation that adversely affect human health, in ways additional to direct inhalation"}
          url={"https://en.wikipedia.org/wiki/Particulates"}
        />
      </ScrollView>
    );
  }
}


const mapStateToProps = (
  state: Types.RootState,
  ownProps: Props
): StateProps =>{
  return{}
}

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<Types.RootAction>
): DispatchProps =>
  Redux.bindActionCreators(
    { },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(Docs)
