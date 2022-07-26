import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_5_252} />
      <View style={styles.View_5_253}>
        <Text style={styles.Text_5_253}>COMMUNİTY</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01fa62f7-d1e5-418a-be25-e2893563332e"
        }}
        style={styles.ImageBackground_5_254}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64ece4fd-5e81-4895-b8c9-f6f6dc1919e2"
        }}
        style={styles.ImageBackground_5_259}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67779690-06ee-4622-9ac3-d7050957036c"
        }}
        style={styles.ImageBackground_5_263}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad506ba5-5704-4845-8453-03490ed78f19"
        }}
        style={styles.ImageBackground_5_265}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a70579f-cbaa-4c32-8933-bcabfa701c52"
        }}
        style={styles.ImageBackground_5_267}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77a190e4-96b0-45b6-8dbb-5a658d213bdd"
        }}
        style={styles.ImageBackground_5_261}
      />
      <View style={styles.View_5_258}>
        <Text style={styles.Text_5_258}>THOMAS</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/769066e4-7ed2-4aaa-aa2a-1787b7b6d9e6"
        }}
        style={styles.ImageBackground_5_255}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65409a0d-413e-41d2-bb2c-de5bebc248be"
        }}
        style={styles.ImageBackground_5_256}
      />
      <View style={styles.View_5_269} />
      <View style={styles.View_5_270}>
        <Text style={styles.Text_5_270}>
          This app is pretty usefull and good . I will go to holi- day via this
          app again . W...{" "}
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(183, 173, 173, 1)" },
  View_2: { height: hp("101%") },
  View_5_252: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    backgroundColor: "rgba(149, 62, 62, 1)"
  },
  View_5_253: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_253: {
    color: "rgba(109, 243, 226, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_254: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("16%")
  },
  ImageBackground_5_259: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_5_263: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_5_265: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_5_267: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_5_261: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_5_258: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_5_258: {
    color: "rgba(108, 126, 95, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_255: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("19%")
  },
  ImageBackground_5_256: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_5_269: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("32%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_5_270: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_5_270: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
