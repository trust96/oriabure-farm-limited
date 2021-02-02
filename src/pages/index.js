import React from 'react';
import Typography from '../content/base/typography';
import Button from '../content/components/button';

export default function index() {
    return (
        <>
            <Typography variant="primary" color="warning">
                this is good
            </Typography>
            <Button variant="outline"> click me</Button>
        </>
    );
}
