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
      <View style={styles.View_5_181} />
      <View style={styles.View_5_182}>
        <Text style={styles.Text_5_182}>LONDON / ENGLAND</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/377903d6-06ef-478e-b650-d14c6cfad0f5"
        }}
        style={styles.ImageBackground_5_183}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f4279e0-fd59-4458-8d8a-7da7d939080a"
        }}
        style={styles.ImageBackground_5_199}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f579c33a-f4c0-4544-ab81-477a953a521d"
        }}
        style={styles.ImageBackground_5_210}
      />
      <View style={styles.View_5_184}>
        <Text style={styles.Text_5_184}>TURKISH AİRLİNES</Text>
      </View>
      <View style={styles.View_5_206}>
        <Text style={styles.Text_5_206}>TURKISH AİRLİNES</Text>
      </View>
      <View style={styles.View_5_185}>
        <Text style={styles.Text_5_185}>LONDON CENTER HO...</Text>
      </View>
      <View style={styles.View_5_203}>
        <Text style={styles.Text_5_203}>THE ROYAL NATİON H...</Text>
      </View>
      <View style={styles.View_5_186}>
        <Text style={styles.Text_5_186}>2600 $</Text>
      </View>
      <View style={styles.View_5_209}>
        <Text style={styles.Text_5_209}>1900 $</Text>
      </View>
      <View style={styles.View_5_187}>
        <Text style={styles.Text_5_187}>HAPPY HOLIDAYS PACKAGE</Text>
      </View>
      <View style={styles.View_5_200}>
        <Text style={styles.Text_5_200}>LOW PRİCE VİSİTİNG PACKAGE</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dee563b-bcf8-47b1-a7e7-5497ba124a18"
        }}
        style={styles.ImageBackground_5_188}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79502018-3265-4e69-8169-2abc9d51cf3c"
        }}
        style={styles.ImageBackground_5_207}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbdbf6db-833a-4f17-80c9-9f2873353180"
        }}
        style={styles.ImageBackground_5_190}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fb82c20-6f1a-4396-8e01-9a38f1bff6c2"
        }}
        style={styles.ImageBackground_5_204}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f11a90e5-0b38-4755-b368-01e8c6efbd60"
        }}
        style={styles.ImageBackground_5_192}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30ba78b9-9f9b-469b-870d-bfc344ad0d74"
        }}
        style={styles.ImageBackground_5_197}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80cc8143-71c5-4963-8c37-3a91f44b0691"
        }}
        style={styles.ImageBackground_5_201}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7c86bc5-f01d-47ad-b12e-fc3025a8a722"
        }}
        style={styles.ImageBackground_5_212}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f86b8a10-eef9-41a5-a536-f9230947b105"
        }}
        style={styles.ImageBackground_5_213}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fddb797f-8d0e-44b9-ae10-4c5c4c89f64c"
        }}
        style={styles.ImageBackground_5_214}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(183, 173, 173, 1)" },
  View_2: { height: hp("189%") },
  View_5_181: {
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
  View_5_182: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_5_182: {
    color: "rgba(225, 219, 165, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_183: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("31%")
  },
  ImageBackground_5_199: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("70%")
  },
  ImageBackground_5_210: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  View_5_184: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_5_184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_206: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("89%"),
    justifyContent: "flex-start"
  },
  Text_5_206: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_185: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_5_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_203: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("82%"),
    justifyContent: "flex-start"
  },
  Text_5_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_186: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_5_186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_209: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_5_209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_187: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_5_187: {
    color: "rgba(101, 120, 87, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_200: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_5_200: {
    color: "rgba(101, 120, 87, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_188: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_5_207: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_5_190: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_5_204: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_5_192: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_5_197: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_5_201: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_5_212: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("13%"),
    resizeMode: "cover"
  },
  ImageBackground_5_213: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("13%"),
    resizeMode: "cover"
  },
  ImageBackground_5_214: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
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
