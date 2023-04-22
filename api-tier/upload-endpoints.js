'use strict';

const AWS = require('aws-sdk');
const fs = require('fs');

const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const API_ENDPOINTS_BUCKET = process.env.ENDPOINTS_BUCKET_NAME;

const s3 = new AWS.S3({region: AWS_REGION});

async function uploadUrlishEndpoints() {
  const srcFileName = 'api-gateway-endpoints.json';
  const srcFilePath = '.serverless/' + srcFileName;;
  console.log("Uploading", srcFileName)

  let data = fs.readFileSync(srcFilePath, {encoding: 'utf-8'});
  await s3.putObject({
        Bucket: API_ENDPOINTS_BUCKET,
        Key: srcFileName,
        Body: data
      }).promise();
}

uploadUrlishEndpoints()
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
