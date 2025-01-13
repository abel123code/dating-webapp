import React from 'react';

import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import Image from 'next/image';

const ChatPage = async () => {

    
    return (
       <>
        <CardHeader className='text-2xl font-semibold text-secondary-800'>
            Chat 
        </CardHeader>
        <Divider />
        <CardBody>
            Chat goes here
        </CardBody>
       </>
    )
}

export default ChatPage