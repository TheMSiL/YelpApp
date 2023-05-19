const CustomInput = props => {
	const { labelTitle, name, type, value, change, blur, placeholder } = props
	
	return (
		<label className='auth-form_label'>
			<span className='auth-form_span'>{labelTitle}</span>
			<input
				className='auth-form_input'
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={change}
				onBlur={blur}
				placeholder={placeholder}
				autoComplete='false'
			/>
		</label>
	);
};

export default CustomInput;
