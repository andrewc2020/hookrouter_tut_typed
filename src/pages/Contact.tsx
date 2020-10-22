import React from 'react'
import {Page} from '../components/Page';
import {A} from 'hookrouter';

export const Contact = ({name}:{[key:string]:any}) =>{

    return(<Page title="Contact">
        <div>Basic Contact Page</div>
<span>hello {name}!</span>
        <p><A href="/about/me">About me</A></p>
    </Page>)
}

