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
      <View style={styles.View_1_23} />
      <View style={styles.View_1_19} />
      <View style={styles.View_1_17} />
      <TouchableOpacity
        style={styles.TouchableOpacity_1_16}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_32"))
        }
      >
        <Text style={styles.Text_1_16}>PLANS</Text>
      </TouchableOpacity>
      <View style={styles.View_1_18}>
        <Text style={styles.Text_1_18}>COMMUNİTY</Text>
      </View>
      <View style={styles.View_1_21}>
        <Text style={styles.Text_1_21}>HOLİDAY PLANS</Text>
      </View>
      <View style={styles.View_1_22}>
        <Text style={styles.Text_1_22}>ABOUT</Text>
      </View>
      <View style={styles.View_1_36} />
      <View style={styles.View_1_37}>
        <Text style={styles.Text_1_37}>FAVORİTİES</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_41}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("5_152"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48fb1ae0-1391-46ef-8cd1-febf2f4e8f24"
        }}
        style={styles.ImageBackground_1_44}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e6acbc0-311c-44f2-a5a3-63fecf593c3b"
        }}
        style={styles.ImageBackground_1_46}
      />
      <View style={styles.View_1_48}>
        <Text style={styles.Text_1_48}>LONDON / ENGLAND</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0188b05b-a2b3-4772-b7b1-c0d696b13c59"
        }}
        style={styles.ImageBackground_1_59}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/234bc2ed-c048-43d6-9b95-409bcaa56437"
        }}
        style={styles.ImageBackground_5_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c56a7427-b4d1-4478-a53e-b54a5b5a8d4d"
        }}
        style={styles.ImageBackground_5_63}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ceeacf7-fc79-4ff7-8e19-3e6f32d49998"
        }}
        style={styles.ImageBackground_5_64}
      />
      <View style={styles.View_5_77}>
        <Text style={styles.Text_5_77}>TURKISH AİRLİNES</Text>
      </View>
      <View style={styles.View_5_74}>
        <Text style={styles.Text_5_74}>LONDON CENTER HO...</Text>
      </View>
      <View style={styles.View_5_71}>
        <Text style={styles.Text_5_71}>2600 $</Text>
      </View>
      <View style={styles.View_5_65}>
        <Text style={styles.Text_5_65}>PLAN OF LONDON...</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1fcb2ddd-5b15-414e-93c0-b8791d82b5d3"
        }}
        style={styles.ImageBackground_5_68}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cff5fbf0-4a55-4cd0-983b-cb66b2f90bb7"
        }}
        style={styles.ImageBackground_5_72}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efb755c3-6c25-45e1-bd3e-d43c7ecf166d"
        }}
        style={styles.ImageBackground_5_75}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(183, 173, 173, 1)" },
  View_2: { height: hp("213%") },
  View_1_23: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("20%"),
    backgroundColor: "rgba(149, 62, 62, 1)"
  },
  View_1_19: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("20%"),
    backgroundColor: "rgba(149, 62, 62, 1)"
  },
  View_1_17: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("20%"),
    backgroundColor: "rgba(149, 62, 62, 1)"
  },
  TouchableOpacity_1_16: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_1_16: {
    color: "rgba(107, 255, 237, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_18: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_1_18: {
    color: "rgba(109, 243, 226, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_21: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1_21: {
    color: "rgba(149, 62, 62, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_22: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_1_22: {
    color: "rgba(109, 243, 226, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_36: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("35%"),
    backgroundColor: "rgba(149, 62, 62, 1)"
  },
  View_1_37: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_1_37: {
    color: "rgba(109, 243, 226, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_41: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("45%"),
    backgroundColor: "rgba(148, 141, 115, 1)"
  },
  ImageBackground_1_44: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_1_46: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_48: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_1_48: {
    color: "rgba(225, 219, 165, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_59: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("55%"),
    resizeMode: "cover"
  },
  ImageBackground_5_61: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("55%"),
    resizeMode: "cover"
  },
  ImageBackground_5_63: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("55%"),
    resizeMode: "cover"
  },
  ImageBackground_5_64: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("74%")
  },
  View_5_77: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("91%"),
    justifyContent: "flex-start"
  },
  Text_5_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_74: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_5_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_71: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("100%"),
    justifyContent: "flex-start"
  },
  Text_5_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_65: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_5_65: {
    color: "rgba(101, 120, 87, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_68: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_5_72: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_5_75: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
