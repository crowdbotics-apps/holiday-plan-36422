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
      <View style={styles.View_5_219} />
      <View style={styles.View_5_220}>
        <Text style={styles.Text_5_220}>ISTANBUL / TURKEY</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3961627c-f1ab-4312-b942-585097b7c309"
        }}
        style={styles.ImageBackground_5_221}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74d46f8a-8f12-4e14-908a-6a72cfbabdcb"
        }}
        style={styles.ImageBackground_5_237}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c81b13f1-1e41-428b-9e4e-eaa04a543814"
        }}
        style={styles.ImageBackground_5_249}
      />
      <View style={styles.View_5_222}>
        <Text style={styles.Text_5_222}>TURKISH AİRLİNES</Text>
      </View>
      <View style={styles.View_5_243}>
        <Text style={styles.Text_5_243}>TURKISH AİRLİNES</Text>
      </View>
      <View style={styles.View_5_223}>
        <Text style={styles.Text_5_223}>ISTANBUL HOTEL</Text>
      </View>
      <View style={styles.View_5_248}>
        <Text style={styles.Text_5_248}>ISTANBUL HOTEL</Text>
      </View>
      <View style={styles.View_5_224}>
        <Text style={styles.Text_5_224}>2600 $</Text>
      </View>
      <View style={styles.View_5_247}>
        <Text style={styles.Text_5_247}>3450 $</Text>
      </View>
      <View style={styles.View_5_225}>
        <Text style={styles.Text_5_225}>TAKE A PHOTO PACKAGE</Text>
      </View>
      <View style={styles.View_5_238}>
        <Text style={styles.Text_5_238}>HAVE A ENJOY PACKAGE</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81710c0f-6752-480e-914e-4b5f76b1c138"
        }}
        style={styles.ImageBackground_5_226}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5773e449-f3f9-4f3e-bc40-24f3a4c6465b"
        }}
        style={styles.ImageBackground_5_244}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d7466df-05b8-4bb8-aa17-ed839245a234"
        }}
        style={styles.ImageBackground_5_228}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb797024-41de-4773-87b1-1378222e7709"
        }}
        style={styles.ImageBackground_5_241}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba78aafd-02cb-4466-9f62-43b35a1a0e89"
        }}
        style={styles.ImageBackground_5_230}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/087ec889-1016-4120-87b5-b9f8ff2367f7"
        }}
        style={styles.ImageBackground_5_231}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f2bbd6e-f18e-4a9d-91fb-2f54366e5d60"
        }}
        style={styles.ImageBackground_5_233}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75b0521a-278a-46da-bd90-464db4c4f7e3"
        }}
        style={styles.ImageBackground_5_239}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56dcf455-932e-4ad0-b0c7-c219be6b9a11"
        }}
        style={styles.ImageBackground_5_235}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/836a169e-2e83-43a1-a84b-9660c8519587"
        }}
        style={styles.ImageBackground_5_236}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(183, 173, 173, 1)" },
  View_2: { height: hp("189%") },
  View_5_219: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("183%"),
    minHeight: hp("183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(148, 141, 115, 1)"
  },
  View_5_220: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_220: {
    color: "rgba(225, 219, 165, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_221: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("32%")
  },
  ImageBackground_5_237: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("70%")
  },
  ImageBackground_5_249: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  View_5_222: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_5_222: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_243: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_5_243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_223: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_5_223: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_248: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("81%"),
    justifyContent: "flex-start"
  },
  Text_5_248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_224: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_5_224: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_247: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_5_247: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_225: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_5_225: {
    color: "rgba(101, 120, 87, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_238: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_5_238: {
    color: "rgba(101, 120, 87, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_226: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_5_244: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_5_228: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_5_241: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_5_230: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("13%"),
    resizeMode: "cover"
  },
  ImageBackground_5_231: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_5_233: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_5_239: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_5_235: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("13%"),
    resizeMode: "cover"
  },
  ImageBackground_5_236: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("13%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
