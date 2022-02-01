import React, { useState } from 'react'
import reactCSS from 'reactcss'

import { TwitterPicker } from 'react-color'

function ColorPIcker({ color, onChange }) {
  const [showPicker, setShowPicker] = useState(false)

  const onClick = () => {
    setShowPicker(!showPicker)
  }

  const onClose = () => {
    setShowPicker(false)
    console.log('close')
  }

  const onChangeColor = (newColor, e) => {
    e.preventDefault()
    setShowPicker(false)
    onChange(newColor.hex)
  }

  const styles = reactCSS({
    default: {
      main: {
        display: 'block',
        marginTop: 'auto',
        marginBottom: '0.2rem',
      },
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `${color}`,
      },
      swatch: {
        padding: '3px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'relative',
        top: '100px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  })
  return (
    <div style={styles.main}>
      <div style={styles.swatch} onClick={onClick}>
        <div style={styles.color} />
      </div>
      {showPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={onClose} />
          <TwitterPicker color={color} onChangeComplete={onChangeColor} />
        </div>
      ) : null}
    </div>
  )
}
export default ColorPIcker
