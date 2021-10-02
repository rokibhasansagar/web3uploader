import process from 'process'
import { Web3Storage, getFilesFromPath } from 'web3.storage'

const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN })
const files = await getFilesFromPath('./source')

const cid = await client.put(files, { name: process.env.UPLOAD_NAME, wrapWithDirectory: false })

console.log('Content added with CID:', cid)
console.log(`Go to https://${cid}.ipfs.dweb.link/ to view and download files`)
