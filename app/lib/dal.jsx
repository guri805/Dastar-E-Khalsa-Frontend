'use server'

import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'
import { cache } from 'react'
import axios from 'axios'
import { redirect } from 'next/navigation'

export const verifySession = cache(async () => {
    const cookie = (await cookies()).get('session')?.value
    console.log('dal Cookie:', cookie)
    const session = await decrypt(cookie)
    console.log('dal Session:', session)
    if (!session.userId) {
        redirect('/login')
    }

    return { isAuth: true, userId: session.userId }
})
