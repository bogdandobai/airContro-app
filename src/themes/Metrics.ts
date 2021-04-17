import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 350
const guidelineBaseHeight = 680
const scale = (size: number) => (width / guidelineBaseWidth) * size
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor

const metrics = {
  width,
  height,
  icons: {
    tiny: 16,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    sMedium: 30,
    medium: 40,
    mediumLarge: 50,
    large: 60,
    profile: 70,
    logo: 200
  },
  fontWeight: {
    thin: '100',
    ultraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    heavy: '800',
    black: '900'
  },
  percentage: {
    _10: '10%',
    _20: '20%',
    _30: '30%',
    _40: '40%',
    _50: '50%',
    _60: '60%',
    _70: '70%',
    _80: '80%',
    _90: '90%',
    _100: '100%',
  },
  verticalScale: {
    _20: verticalScale(20),
    _30: verticalScale(30),
  },
  moderateScale: {
    _1: moderateScale(1),
    _2: moderateScale(2),
    _3: moderateScale(3),
    _4: moderateScale(4),
    _5: moderateScale(5),
    _6: moderateScale(6),
    _7: moderateScale(7),
    _8: moderateScale(8),
    _9: moderateScale(9),
    _10: moderateScale(10),
    _12: moderateScale(12),
    _13: moderateScale(13),
    _14: moderateScale(14),
    _15: moderateScale(15),
    _16: moderateScale(16),
    _17: moderateScale(17),
    _18: moderateScale(18),
    _19: moderateScale(19),
    _20: moderateScale(20),
    _21: moderateScale(21),
    _22: moderateScale(22),
    _23: moderateScale(23),
    _24: moderateScale(24),
    _25: moderateScale(25),
    _27: moderateScale(27),
    _29: moderateScale(29),
    _30: moderateScale(30),
    _31: moderateScale(31),
    _32: moderateScale(32),
    _34: moderateScale(34),
    _35: moderateScale(35),
    _36: moderateScale(36),
    _40: moderateScale(40),
    _41: moderateScale(41),
    _42: moderateScale(42),
    _44: moderateScale(44),
    _48: moderateScale(48),
    _50: moderateScale(50),
    _55: moderateScale(55),
    _58: moderateScale(58),
    _59: moderateScale(59),
    _60: moderateScale(60),
    _63: moderateScale(63),
    _64: moderateScale(64),
    _68: moderateScale(68),
    _65: moderateScale(65),
    _71: moderateScale(71),
    _84: moderateScale(84),
    _100: moderateScale(100),
    _115: moderateScale(115),
    _132: moderateScale(132),
    _137: moderateScale(137),
    _139: moderateScale(139),
    _151: moderateScale(151),
    _164: moderateScale(164),
    _181: moderateScale(181),
    _185: moderateScale(185),
    _193: moderateScale(193),
    _200: moderateScale(200),
    _230: moderateScale(230),
    _240: moderateScale(240),
    _280: moderateScale(280),
    _295: moderateScale(295),
    _315: moderateScale(315),
    _330: moderateScale(330),
    _344: moderateScale(344),
    _500: moderateScale(500),
  }
};
export default metrics
