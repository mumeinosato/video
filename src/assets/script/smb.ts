import SambaClient from 'samba-client';
import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    address: process.env.SMB_ADDRESS,
    username: process.env.SMB_USERNAME,
    password: process.env.SMB_PASSWORD,
};

const sambaClient = new SambaClient({
    address: config.address ?? '',
    username: config.username,
    password: config.password,
});


function getFileList() {
    return new Promise<string[]>((resolve, reject) => {
        sambaClient.listFiles('', '').then((data: string[]) => {
            resolve(data);
        }).catch((err: Error) => {
            reject(err);
        });
    });
}