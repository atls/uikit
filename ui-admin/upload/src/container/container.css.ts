import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-admin/theme'

export const containerStyles = style({
  position: 'relative',
  borderWidth: 2,
  borderStyle: 'dashed',
  cursor: 'pointer',
  outline: 'none',
  borderColor: 'rgba(255, 255, 255, 0.24)',
})

export const dropzoneContainerStyles = style({
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',
})

export const containerDragActiveStyles = style({
  borderColor: vars.colors.green,
})

export const containerDragRejectStyles = style({
  borderColor: vars.colors.red,
})

export const containerDragAcceptStyles = style({
  borderColor: vars.colors.blue,
})