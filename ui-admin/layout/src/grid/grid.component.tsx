import React             from 'react'
import { forwardRef }    from 'react'

import { GridElement }   from '@atls-ui-parts/layout'

import { GridProps }     from './grid.interfaces.js'
import { gridSprinkles } from './grid.css.js'

export const Grid = forwardRef<HTMLDivElement, GridProps>(({ children, ...props }, ref) => (
  <GridElement ref={ref} sprinkles={gridSprinkles as any} {...props}>
    {children}
  </GridElement>
))

Grid.defaultProps = {
  display: 'grid',
  boxSizing: 'border-box',
}