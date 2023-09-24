# Daily The Crucial - Ethglobal New York 2023

## Challenge

The NFT's on-chain has limits which exceed the costs of storing a large amount of data, especially media such as photos, audios, videos essential for a news business companies.

## Proposal

I want to create a platform that allows journalists, publishers and editors to create daily news in the style of old-fashioned newspapers, taking advantage of every space within an image with a capture size of 1200x1200 pixels on the NFT blockchain.

Then, match the image with the off-chain resources stored like photos, videos and audios.

## Backend

The backend was made with KeystoneJS CMS, please visit [https://keystonejs.com/](https://keystonejs.com/).

## Install deps

```
npm install
```

## Run dev enviroment

```
npm run dev
```

## Auth

Login in the browser  [http://localhost:8000/signin](http://localhost:8000/signin)

```
User email: johndoe@thecrucial.com
Password: thecrucial123
```

## Frontend

The frontend was made with NextJS [https://nextjs.org/](https://nextjs.org/) and It's inside the [./d-crucial-frontend](/d-crucial-frontend) folder

Run frontend with: 

```
cd d-crucial-frontend
npm install
npm run dev
```

## Rust Server

I'm willing to connect the Arbitrum stylus [https://docs.arbitrum.io/stylus/stylus-gentle-introduction](https://docs.arbitrum.io/stylus/stylus-gentle-introduction) with a Rust Server like Actix [https://actix.rs/](https://actix.rs/) to dispose the NFT generation and deploy through async url methods

Run Rust Server with:

```
cd d-crucial-stylus
cargo run
```

In order to everything works, you have to run the backend with keystonejs, the frontend with NextJS and Rust Server at the same time.

## Visit Daily The Crucial

Please feel free to create a new User and then create a new Post at: [http://localhost:8000/]
(http://localhost:8000/)

The you can visit your daily preview at [http://localhost:3000](http://localhost:3000)

Next you can connect your wallet with metamask, then generate your NFT.

## What's next?

- Optimization of capture with Rust
- Trace the image capture to svg
- Store images, videos, and more resources with IPFS



Thank you ETHGlobal New York!

### By David Almeciga