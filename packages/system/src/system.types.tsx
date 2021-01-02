import {
  ResponsiveValue,
  SystemProps,
  SystemStyleObject,
  ThemeTypings,
} from "@chakra-ui/styled-system"
import { Dict } from "@chakra-ui/utils"
import { Interpolation } from "@emotion/react"
import * as React from "react"
import { ComponentWithAs } from "./forward-ref"

export interface ThemingProps<ThemeComponent extends string = string> {
  variant?: ThemeTypings["components"][ThemeComponent]["variants"]
  size?: ThemeTypings["components"][ThemeComponent]["sizes"]
  colorScheme?: string
  orientation?: "vertical" | "horizontal"
  styleConfig?: Dict
}

export interface ChakraProps extends SystemProps {
  /**
   * apply layer styles defined in `theme.layerStyles`
   */
  layerStyle?: string
  /**
   * apply typography styles defined in `theme.textStyles`
   */
  textStyle?: string
  /**
   * Reference styles from any component or key in the theme.
   *
   * @example
   * ```jsx
   * <Box apply="styles.h3">This is a div</Box>
   * ```
   *
   * This will apply styles defined in `theme.styles.h3`
   */
  apply?: string
  /**
   * if `true`, it'll render an ellipsis when the text exceeds the width of the viewport or maxWidth set.
   */
  isTruncated?: boolean
  /**
   * Used to truncate text at a specific number of lines
   */
  noOfLines?: ResponsiveValue<number>
  /**
   * Used for internal css management
   * @private
   */
  __css?: SystemStyleObject
  /**
   * Used to pass theme-aware style props.
   * NB: This is the public API for user-land
   */
  sx?: SystemStyleObject
  /**
   * The emotion's css style object
   */
  css?: Interpolation<{}>
}

export type As = React.ElementType

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}

export interface ChakraComponent<T extends As, P = {}>
  extends ComponentWithAs<T, P & ChakraProps> {}
