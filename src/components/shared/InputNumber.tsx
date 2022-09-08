import { InputNumber as Input } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { InputNumberProps } from 'models';
import { useState } from 'react';
import './style.scss'

export const InputNumber = (props: InputNumberProps ) => {
	const {inputValue , setInputValue} = props;
	const [value , setValue] = useState(100)
	return <Input className='input__number' onChange={(value) => setValue(value)} addonAfter={<SyncOutlined className='input__icon' onClick={() => {setInputValue(value)}} />} defaultValue={inputValue} />;
};
