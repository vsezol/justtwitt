import {
  minSm,
  minMd,
  minLg,
  minXl,
  maxContSm,
  maxContMd,
  maxContLg,
  maxContXl
} from './grid'

export const getMaxContWidth = winW => {
  if (winW >= minXl) {
    return maxContXl
  } else if (winW >= minLg) {
    return maxContLg
  } else if (winW >= minMd) {
    return maxContMd
  } else if (winW >= minSm) {
    return maxContSm
  } else {
    return winW - 20
  }
}
