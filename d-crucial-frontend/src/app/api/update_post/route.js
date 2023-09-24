import sharp from 'sharp'

import { NextResponse } from 'next/server'

import { updatePostWithChainMessage } from '@/lib/api'

export async function POST(request) {
    const payload = await request.json()

    const encoding = 'base64'
    const regex = /^data:.+\/(.+);base64,(.*)$/

    const matches = payload.message.match(regex)
    const data = matches[2]
    const buffer = Buffer.from(data, encoding)
    
    const result = await sharp(buffer)
        .resize({
            fit: sharp.fit.contain,
            width: 1200,
            height: 1200
        })
        .greyscale()
        .toBuffer()

    const message = `data:image/png;${encoding},${result.toString(encoding)}`
    const res = await updatePostWithChainMessage(payload.postId, message)

    return NextResponse.json(res)
}