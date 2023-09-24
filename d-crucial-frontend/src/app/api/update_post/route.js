import fs from 'fs'
import path from 'path'

import sharp from 'sharp'

// import imagemin from 'imagemin'
// import imageminPngquant from 'imagemin-pngquant'

import { NextResponse } from 'next/server'

import { updatePostWithChainMessage } from '@/lib/api'

export async function POST(request) {
    const payload = await request.json()

    const regex = /^data:.+\/(.+);base64,(.*)$/

    const matches = payload.message.match(regex)
    const ext = matches[1]
    const data = matches[2]
    const buffer = Buffer.from(data, 'base64')
    const filename = path.join('public', 'tmp', `${Date.now()}.` + ext)

    const result = await sharp(buffer)
        .resize({
            fit: sharp.fit.contain,
            width: 1200,
            height: 1200
        })
        .greyscale()
        .toFile(filename)

    console.log(result)

    // fs.writeFileSync(filename, buffer)

    // const compressed = await imagemin([filename], {
    //     destination: 'public/tmp/compressed',
    //     plugins: [
    //         imageminPngquant({
    //             quality: [0.6, 0.8]
    //         })
    //     ]
    // })
    // console.log(compressed)
    //   const success = await createContact(payload)
    return NextResponse.json({})
}