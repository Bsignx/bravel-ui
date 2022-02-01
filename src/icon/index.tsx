import React, { SVGProps } from 'react'

import { BasketballIcon } from './svg/basketball-icon'
import { BikeIcon } from './svg/bike-icon'
import { EsportsIcon } from './svg/esports-icon'
import { GolfIcon } from './svg/golf-icon'
import { MmaIcon } from './svg/mma-icon'
import { RugbyIcon } from './svg/rugby-icon'
import { RunningIcon } from './svg/running-icon'
import { SkateboardIcon } from './svg/skateboard-icon'
import { SoccerIcon } from './svg/soccer-icon'
import { TennisIcon } from './svg/tennis-icon'
import { VolleyballIcon } from './svg/volleyball-icon'
import { YogaIcon } from './svg/yoga-icon'

type SportsName =
  | 'basketball'
  | 'soccer'
  | 'rugby'
  | 'esports'
  | 'tennis'
  | 'volleyball'
  | 'yoga'
  | 'running'
  | 'skateboard'
  | 'golf'
  | 'mma'
  | 'bike'

export type IconProps =
  | {
      name: SportsName
    }
  | SVGProps<SVGSVGElement>

export const Icon = ({ name, ...rest }: IconProps) => {
  switch (name) {
    case 'basketball':
      return <BasketballIcon {...rest} />
    case 'soccer':
      return <SoccerIcon {...rest} />
    case 'volleyball':
      return <VolleyballIcon {...rest} />
    case 'rugby':
      return <RugbyIcon {...rest} />
    case 'esports':
      return <EsportsIcon {...rest} />
    case 'mma':
      return <MmaIcon {...rest} />
    case 'tennis':
      return <TennisIcon {...rest} />
    case 'running':
      return <RunningIcon {...rest} />
    case 'golf':
      return <GolfIcon {...rest} />
    case 'bike':
      return <BikeIcon {...rest} />
    case 'yoga':
      return <YogaIcon {...rest} />
    case 'skateboard':
      return <SkateboardIcon {...rest} />
    default:
      return null
  }
}
