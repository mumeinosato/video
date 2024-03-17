import * as fs from 'fs';

function devMode() {
    try {
        fs.accessSync('.env', fs.constants.F_OK);
        return true;
    }catch (error) {
        return false;
    }
}

export function getApiUrl() {
    return '127.0.0.1:3000';
    /*if(devMode()) {
        return '127.0.0.1:3000';
    }else{
        //const apiUrl = process.env.API_URL;
        return '192.168.0.19:3000';
    }*/
}