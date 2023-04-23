'use strict';

const AWS = require('aws-sdk');
const fs = require('fs');

const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const ENV_FOLDER = 'src/environments/';
const API_ENDPOINTS_BUCKET = process.env.ENDPOINTS_BUCKET_NAME;
const API_KEY_SOURCE = "api-gateway-endpoints";
const API_KEY_TARGET = "api-gateway-endpoints.json";

/**
 * Copy s3 folder
 */
async function importApiEndpoints() {
  const s3 = new AWS.S3({region: AWS_REGION});

  // plan, list through the source, if got continuation token, recursive
  const listResponse = await s3.listObjectsV2({
    Bucket: API_ENDPOINTS_BUCKET,
  }).promise();

  // copy objects
  await Promise.all(
    listResponse.Contents.map(async (file) => {
      const target = ENV_FOLDER + file.Key;
      console.log("Copying", target)

      const response = await s3.getObject({
        Bucket: API_ENDPOINTS_BUCKET,
        Key: file.Key,
      }).promise();

      const data = response.Body;
      fs.writeFileSync(target, data);
    }),
  );
}

async function importApiKeys() {
  const target = ENV_FOLDER + API_KEY_TARGET;
  const api = new AWS.APIGateway({region: AWS_REGION});
  const response = await api.getApiKeys({
    nameQuery: API_KEY_SOURCE,
    includeValues: true
  }).promise();

  console.log(`Save ${API_KEY_SOURCE}`, target);
  const data = JSON.stringify(response);
  fs.writeFileSync(target, data);
}

importApiEndpoints()
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

importApiKeys()
  .catch(err => {
    console.error(err);
    process.exit(1);
  });