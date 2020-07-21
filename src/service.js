import CryptoJS from 'crypto-js'
import { Base64 } from 'js-base64';

const baseUrl = 'https://api.lyyti.com/v2/'
const public_key = ''
const private_key = ''

const createSignature = (timestamp, callString) => CryptoJS.HmacSHA256(
    Base64.encode(public_key+','+timestamp+','+callString),
    private_key
).toString(CryptoJS.enc.Hex);

const createAuthHeader = (timestamp, signature) => 
'LYYTI-API-V2 '
            + 'public_key=' + public_key + ', '
            + 'timestamp=' + timestamp + ', '
            + 'signature=' + signature

const lyytiApi = (callString) => {
    const timestamp = Math.floor((new Date() / 1000));
    const signature = createSignature(timestamp, callString)
 
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json; charset=utf-8',
            'Authorization': createAuthHeader(timestamp, signature)
        }
    };

            return fetch(baseUrl + callString, options).then(response => response.json())
        }

    

export default lyytiApi