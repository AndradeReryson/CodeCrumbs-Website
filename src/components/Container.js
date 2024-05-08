import React from 'react'
import PropTypes from 'prop-types'
import './general/Theme.css'
import './Container.css'

/**
 * É um container genérico para posicionar elementos dentro.
 * O container usa flex box para alinhar seus items
 * 
 * @param {String} width largura do container. medida de preferencia: vw
 * @param {String} height altura do container. medida de preferencia: vh
 * @param {String} margin margem do container. formato "x y z w"
 * @param {String} padding padding do container. formato "x y z w"
 * @param {String} flexDirection define o eixo de alinhamento do flex box. 
 * @param {String} justifyContent define o alinhamento horizontal dos items. Varia dependendo do flexDirection
 * @param {String} alignItems define o alinhamento vertical dos items. Varia dependendo do flexDirection
 * @param {Node} children recebe todos os elementos inseridos dentro da tag do componente
 * @returns 
 */
const Container = ({width, height, margin, padding, flexDirection, justifyContent, alignItems, flexWrap, children}) => {
  return (
    <div 
        className="container" 
        style={{
          width: width, 
          height: height, 
          margin: margin,
          flexDirection: flexDirection,
          alignItems: alignItems,
          justifyContent: justifyContent,
          padding: padding,
          flexWrap: flexWrap
        }}
    >
        <>{children}</>
    </div>
  )
}

Container.propTypes = {
    width:          PropTypes.string,
    height:         PropTypes.string,
    margin:         PropTypes.string,
    padding:        PropTypes.string,
    flexDirection:  PropTypes.string,
    alignItems:     PropTypes.string,
    justifyContent: PropTypes.string,
    flexWrap:       PropTypes.string,
    children:       PropTypes.node
}

Container.defaultProps = {
    width:          '80vw',
    height:         '80dvh',
    margin:         '0 0 0 0',
    padding:        '0 0 0 0',
    flexDirection:  'column',
    alignItems:     'center',
    justifyContent: 'flex-start',
    flexWrap:       'nowrap'
}

export default Container