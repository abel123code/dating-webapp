import { getAuthUserId } from '@/app/actions/authActions'
import { getMemberByUserId, getMemberPhotoByUserId } from '@/app/actions/memberActions';
import MemberPhotos from '@/app/components/MemberPhotos';
import { CardBody, CardHeader, Divider } from '@nextui-org/react'
import { get } from 'http';
import React from 'react'
import MembersPhotoUpload from './MembersPhotoUpload';

const PhotoPage = async () => {
  const userId = await getAuthUserId(); 
  const member = await getMemberByUserId(userId); 

  const photo = await getMemberPhotoByUserId(userId);

  return (
    <>
    <CardHeader className="flex flex-row justify-between items-center">
      <div className="text-2xl font-semibold text-default">
        Edit Profile
      </div>
    </CardHeader>
    <Divider />
    <CardBody>
      <MembersPhotoUpload />
      <MemberPhotos
        photos={photo}
        editing={true}
        mainImageUrl={member?.image}
      />
    </CardBody>
  </>
  )
}

export default PhotoPage