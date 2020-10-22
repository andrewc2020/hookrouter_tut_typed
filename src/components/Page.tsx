import React from 'react';

export const Page = ({title, children}:{[key:string]:any}) =>{
    return (
    <div style={{textAlign:'left', margin: '20px'}}><h2>{title}</h2>
    {children}
    </div>
    )

}

export default Page;