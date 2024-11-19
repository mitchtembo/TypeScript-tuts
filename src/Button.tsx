import React from 'react'

type ButtonShape = {
    label: string,
    onClick: () => void,
    disabled: boolean // or disabled?: booleam || null
}

const Button = ({label, onClick, disabled}: ButtonShape) => {

    const styles = {
        backgroundColor: disabled ? 'gray' : 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        outline: 'none',
    }
  return (
    <div>
        <button style={styles} onClick={onClick} disabled={disabled}>{label}</button>
    </div>
  )
}

export default Button