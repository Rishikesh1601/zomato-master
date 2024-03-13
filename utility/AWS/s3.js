import AWS from "aws-sdk";

//create an object where we will have our access keys
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

//upload to s3 function
export const s3Upload = (options) => {
    return new Promise((resolve,reject)=>
    s3Bucket.upload(options, (error,data)=> {
        if(error){
            return reject(error);
        }else{
            return resolve(data);
        }
    })
    
    )
}