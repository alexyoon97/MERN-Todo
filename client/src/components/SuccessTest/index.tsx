import React from 'react'

export interface ISuccessTextProps {
    Success: string;
}

const SuccessTest: React.FunctionComponent<ISuccessTextProps> = props =>{
    const {Success} = props;

    if(Success === '') return null;

    return <small className='text-success'>{Success}</small>
}

export default SuccessTest