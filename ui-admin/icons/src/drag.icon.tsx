import React from 'react'
import { Icon, IconProps } from '@atls-ui-admin/icon'
export const DragIcon = (props: IconProps) => (
  <Icon
    width='1em'
    height='1em'
    viewBox='0 0 16 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M15.5714 1.78723H0.428571C0.191893 1.78723 0 1.61576 0 1.40426V0.382979C0 0.171479 0.191893 0 0.428571 0H15.5714C15.8081 0 16 0.171479 16 0.382979V1.40426C16 1.61576 15.8081 1.78723 15.5714 1.78723ZM15.5714 6.89362H0.428571C0.191893 6.89362 0 6.72214 0 6.51064V5.48936C0 5.27786 0.191893 5.10638 0.428571 5.10638H15.5714C15.8081 5.10638 16 5.27786 16 5.48936V6.51064C16 6.72214 15.8081 6.89362 15.5714 6.89362ZM15.5714 12H0.428571C0.191893 12 0 11.8285 0 11.617V10.5957C0 10.3842 0.191893 10.2128 0.428571 10.2128H15.5714C15.8081 10.2128 16 10.3842 16 10.5957V11.617C16 11.8285 15.8081 12 15.5714 12Z'
      fill='#DBDBDB'
    />
  </Icon>
)
DragIcon.displayName = 'DragIcon'