import * as CSS from "csstype"
import { Config, PropConfig, createParser, system } from "../core"
import { getIsRtl, Length, ResponsiveValue } from "../utils"
import { PropsPath } from "../utils.types"
import { ChakraTheme } from ".."

const floatTransform: PropConfig["transform"] = (value, _, props = {}) => {
  const map = { left: "right", right: "left" }
  return getIsRtl(props) ? map[value] : value
}

const config: Config = {
  animation: true,
  appearance: true,
  visibility: true,
  userSelect: true,
  pointerEvents: true,
  cursor: true,
  resize: true,
  objectFit: true,
  objectPosition: true,
  float: {
    property: "float",
    transform: floatTransform,
  },
  willChange: true,
  filter: true,
}

export interface OtherProps<Theme extends ChakraTheme = ChakraTheme> {
  /**
   * The CSS `animation` property
   */
  animation?: ResponsiveValue<CSS.Property.Animation>
  /**
   * The CSS `appearance` property
   */
  appearance?: ResponsiveValue<CSS.Property.Appearance>
  /**
   * The CSS `visibility` property
   */
  visibility?: ResponsiveValue<CSS.Property.Visibility>
  /**
   * The CSS `user-select` property
   */
  userSelect?: ResponsiveValue<CSS.Property.UserSelect>
  /**
   * The CSS `pointer-events` property
   */
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents>
  /**
   * The CSS `cursor` property
   */
  cursor?: ResponsiveValue<CSS.Property.Cursor>
  /**
   * The CSS `resize` property
   */
  resize?: ResponsiveValue<CSS.Property.Resize>
  /**
   * The CSS `object-fit` property
   */
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit>
  /**
   * The CSS `object-psition` property
   */
  objectPosition?: ResponsiveValue<
    CSS.Property.ObjectPosition<Length> & PropsPath<Theme["sizes"]>
  >
  /**
   * The CSS `float` property
   */
  float?: ResponsiveValue<CSS.Property.Float>
  /**
   * The CSS `will-change` property
   */
  willChange?: ResponsiveValue<CSS.Property.WillChange>
  /**
   * The CSS `filter` property
   */
  filter?: ResponsiveValue<CSS.Property.Filter>
}

export const others = system(config)
export const othersParser = createParser(config)
