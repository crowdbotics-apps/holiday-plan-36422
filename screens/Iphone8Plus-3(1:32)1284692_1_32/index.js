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
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/299dae68-1896-452c-8723-370306f52dc3"
        }}
        style={styles.TouchableOpacity_5_78}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("5_152"))
        }
      />
      <View style={styles.View_5_79}>
        <Text style={styles.Text_5_79}>LONDON / ENGLAND</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/919247f3-e42f-46cd-816c-1aa6c98c7f41"
        }}
        style={styles.ImageBackground_5_80}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5891124-267f-451d-9592-ad4d75627ee5"
        }}
        style={styles.ImageBackground_5_81}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e3b76f2-9f4d-4817-82bb-6f0d2cdd6ba6"
        }}
        style={styles.ImageBackground_5_82}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5eda6421-0463-4c05-8644-d451f73244ce"
        }}
        style={styles.ImageBackground_5_83}
      />
      <View style={styles.View_5_84}>
        <Text style={styles.Text_5_84}>TURKISH AİRLİNES</Text>
      </View>
      <View style={styles.View_5_85}>
        <Text style={styles.Text_5_85}>LONDON CENTER HO...</Text>
      </View>
      <View style={styles.View_5_86}>
        <Text style={styles.Text_5_86}>2600 $</Text>
      </View>
      <View style={styles.View_5_164}>
        <Text style={styles.Text_5_164}>HAPPY HOLIDAYS PACKAGE</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d386d475-3aed-4bae-855e-2384d666f3c9"
        }}
        style={styles.ImageBackground_5_88}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d93e1315-e51d-4c01-8b82-6e3760197a91"
        }}
        style={styles.ImageBackground_5_92}
      />
      <View style={styles.View_5_96} />
      <View style={styles.View_5_99}>
        <Text style={styles.Text_5_99}>PLANS</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fec999fb-f5ae-4516-8cce-bf9369b01a37"
        }}
        style={styles.ImageBackground_5_153}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b83cf8a3-31e8-463c-abe1-ad62329bb1b3"
        }}
        style={styles.ImageBackground_5_155}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d52140e-e6cb-4bd4-b520-7e33d70972e8"
        }}
        style={styles.ImageBackground_5_156}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed6dfc00-a177-4f4f-856b-e769b21c7185"
        }}
        style={styles.ImageBackground_5_157}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c780424-ce27-4f88-8f19-d669897b0005"
        }}
        style={styles.ImageBackground_5_168}
      />
      <View style={styles.View_5_100} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3b2e5f9-fa91-4a8f-9231-538357ab7f06"
        }}
        style={styles.ImageBackground_5_166}
      />
      <View style={styles.View_5_101}>
        <Text style={styles.Text_5_101}>ISTANBUL / TURKEY</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/606d3b09-6f75-4c1b-843b-66ef3be61312"
        }}
        style={styles.ImageBackground_5_118}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f49062ad-d1b1-473c-b690-d260b0bfb3f7"
        }}
        style={styles.ImageBackground_5_159}
      />
      <View style={styles.View_5_177}>
        <Text style={styles.Text_5_177}>TURKISH AİRLİNES</Text>
      </View>
      <View style={styles.View_5_167}>
        <Text style={styles.Text_5_167}>ISTANBUL HOTEL</Text>
      </View>
      <View style={styles.View_5_180}>
        <Text style={styles.Text_5_180}>2600 $</Text>
      </View>
      <View style={styles.View_5_172}>
        <Text style={styles.Text_5_172}>TAKE A PHOTO PACKAGE</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce169667-83b7-4279-8656-ed19797b575f"
        }}
        style={styles.ImageBackground_5_178}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be2ebd80-ae56-42d2-b2d9-2818972ad9bd"
        }}
        style={styles.ImageBackground_5_175}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41122bfc-f0f6-4190-9a61-b3f8be4224cf"
        }}
        style={styles.ImageBackground_5_173}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9db9c6f5-1bdd-472d-a9a4-1f2c43f39d75"
        }}
        style={styles.ImageBackground_5_170}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/992402f6-1198-404a-8eca-e074f7766ffa"
        }}
        style={styles.ImageBackground_5_161}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bbb259d-a1ab-498e-9436-a00f6aff7ae8"
        }}
        style={styles.ImageBackground_5_160}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e3b7217-b409-4ace-a66a-0fb6ec19658c"
        }}
        style={styles.ImageBackground_5_117}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1143a21-f967-4fd3-95e8-81f9462a4824"
        }}
        style={styles.ImageBackground_5_116}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(183, 173, 173, 1)" },
  View_2: { height: hp("213%") },
  TouchableOpacity_5_78: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("19%")
  },
  View_5_79: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_5_79: {
    color: "rgba(225, 219, 165, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_80: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("28%"),
    resizeMode: "cover"
  },
  ImageBackground_5_81: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("28%"),
    resizeMode: "cover"
  },
  ImageBackground_5_82: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("28%"),
    resizeMode: "cover"
  },
  ImageBackground_5_83: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("47%")
  },
  View_5_84: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_5_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_85: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_5_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_86: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_5_86: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_164: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_5_164: {
    color: "rgba(101, 120, 87, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_88: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_5_92: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_5_96: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    backgroundColor: "rgba(149, 62, 62, 1)"
  },
  View_5_99: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_99: {
    color: "rgba(109, 243, 226, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_153: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_5_155: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("87%")
  },
  ImageBackground_5_156: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("87%")
  },
  ImageBackground_5_157: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("87%")
  },
  ImageBackground_5_168: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_5_100: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("101%"),
    backgroundColor: "rgba(148, 141, 115, 1)"
  },
  ImageBackground_5_166: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("132%")
  },
  View_5_101: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("105%"),
    justifyContent: "flex-start"
  },
  Text_5_101: {
    color: "rgba(225, 219, 165, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_118: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("113%"),
    resizeMode: "cover"
  },
  ImageBackground_5_159: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("171%")
  },
  View_5_177: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("152%"),
    justifyContent: "flex-start"
  },
  Text_5_177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_167: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("143%"),
    justifyContent: "flex-start"
  },
  Text_5_167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_180: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("158%"),
    justifyContent: "flex-start"
  },
  Text_5_180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_172: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("134%"),
    justifyContent: "flex-start"
  },
  Text_5_172: {
    color: "rgba(101, 120, 87, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_178: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_5_175: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_5_173: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_5_170: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_5_161: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("171%")
  },
  ImageBackground_5_160: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("171%")
  },
  ImageBackground_5_117: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("112%"),
    resizeMode: "cover"
  },
  ImageBackground_5_116: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("112%"),
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
