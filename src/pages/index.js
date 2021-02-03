
import React from 'react';
import Typography from '../content/base/typography';
import Button from '../content/components/button';
import signup from '../utils/auth/auth';
import Menu from '../content/components/menu';
import Navlist from '../content/modules/navlist';
import Navbar from '../content/modules/navbar';

export default function index() {
    return (
        <>
            <Typography variant="body1" color="warning">
                this is good
            </Typography>
            <Button variant="outline" onClick={signup}> click me</Button>
            <Button variant="primary" > click me</Button>
            <Menu/>
<Navbar/>
        </>
    );
}
