import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Row = styled.div`
  display: flex;
  align-items: ${props => props.align};
  ${props => {
    const gutter = props.gutter
    const spaceValue = gutter / 2
    return (
      gutter &&
      css`
        & > div {
          padding-left: ${spaceValue}px;
          padding-right: ${spaceValue}px;
          &:first-child {
            padding-left: 0;
          }
          &:last-child {
            padding-right: 0;
          }
        }
      `
    )
  }}
`

Row.propTypes = {
  gutter: PropTypes.number
}

export default Row
