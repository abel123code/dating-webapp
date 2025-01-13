import React from 'react';
import { getMemberPhotoByUserId } from '@/app/actions/memberActions';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import Image from 'next/image';

const PhotosPage = async ({
    params
    }: {
    params: {userId: string}
}) => {

    const photos = await getMemberPhotoByUserId(params.userId);
    console.log(photos)
    return (
       <>
        <CardHeader className='text-2xl font-semibold text-secondary-800'>
            Photos 
        </CardHeader>
        <Divider />
        <CardBody>
            <div className="grid grid-cols-5 gap-3">
            {photos &&
                photos.map((photo) => (
                <div key={photo.id}>
                    <Image
                        src={photo.url}
                        alt="Image of member"
                        width={200}
                        height={200}
                        className="object-cover aspect-square"
                    />
                </div>
                ))}
            </div>
        </CardBody>
       </>
    )
}

export default PhotosPage