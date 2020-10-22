import React from 'react'
import {Page} from '../components/Page';
import { useRoutes } from 'hookrouter';
import {AboutMe} from './AboutMe';
import {AboutMyCat} from './AboutMyCat';
import {AboutMyDog} from './AboutMyDog';
import {A} from 'hookrouter';

const routes = {
    'me': () => <AboutMe />,
    'cat': () => <AboutMyCat />,
    'dog': () => <AboutMyDog />
}

export const About = () =>{
    const match = useRoutes(routes);
    return(<Page title="About">
        <p>About</p>
        <div style={{display:'flex', marginBottom:'20px'}}>
            <span style={{marginRight:'20px'}}><A href="/about/me">About me</A></span>
            <span style={{marginRight:'20px'}}><A href="/about/cat">About my cat</A></span>
            <span style={{marginRight:'20px'}}><A href="/about/dog">About my dog</A></span>
        </div>
        {match || <div>Pick a Page</div>}
        <div style={{display:'flex', marginBottom:'20px'}}></div>
        <span><A href="/contact/andrew">Contact Me</A></span>
    </Page>)
}

export default About;