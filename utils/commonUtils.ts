import cryptoJs from 'crypto-js';

export default class CommonUtils {

    private secretKey: string;

    constructor() {
        this.secretKey = process.env.ENCRYPTION_KEY ? process.env.ENCRYPTION_KEY : "";

        if (process.env.ENCRYPTION_KEY) {
            this.secretKey = process.env.ENCRYPTION_KEY;
        }
        else {
            throw new Error("Please set the ENCRYPTION_KEY environment variable.");
        }
    }
    /**
     * Purpose: Encrypts the data using AES encryption with a secret key.   
     * @param data 
     * @returns encrypted data as a string
     */
    public encrpytData(data: string){
        const encryptedData = cryptoJs.AES.encrypt(data,this.secretKey).toString();
        console.log("Encrypted Data: ", encryptedData);
        return encryptedData;
    }
    /**
     * 
     * @param encData 
     * @returns decrypted data as a string
     * Purpose: Decrypts the encrypted data using AES decryption with a secret key.
     */
    public decrpytData(encData: string) {
        const decryptedData = cryptoJs.AES.decrypt(encData, this.secretKey).toString(cryptoJs.enc.Utf8);  
        console.log("Decrypted Data: ", decryptedData);
        return decryptedData;
    }
}
