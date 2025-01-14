'use server'

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma";

export async function getMembers() {
    const session = await auth();
    if (!session?.user) {
        return null;
    }

    try {
        return prisma.member.findMany({
            where: {
                NOT: {
                    userId: session.user.id
                }
            }
        });
    } catch (e) {    
        console.log(e);
        throw e; 
    }
}

export async function getMemberByUserId(userId: string) {
    try {
        return prisma.member.findUnique({
            where: {
                userId
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getMemberPhotoByUserId(userId: string) {
    const member =  await prisma.member.findUnique({
        where: {
            userId
        },
        select: {
            photos: true
        }
    })

    if (!member) {
        return null;    
    }

    return member.photos.map(p => p); 
}