import React from 'react'

const Input = (props) => {
	const {value, onChange, className, type, placeholder} = props
	return (
		<input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
	)
}

export default Input
