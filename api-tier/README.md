# Export aws gateway endpoints using serverless-plugin-export-endpoints

Export gateway endpoints to a json-file using a Serverless plugin serverless-plugin-export-endpoints
Upload the json-file to an S3 bucket


1. Initialize environment variables:

- Setup AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
```sh
export AWS_ACCESS_KEY_ID=<AWS_ACCESS_KEY_ID>
export AWS_SECRET_ACCESS_KEY=<AWS_SECRET_ACCESS_KEY>
```

- Setup AWS_REGION (us-east-1, us-west-1, etc)
```sh
export AWS_REGION=<region> 
```

- Setup AWS_STAGE (dev, qa, prod, etc)
```sh
export AWS_STAGE=<stage
```

- Setup ENDPOINTS_BUCKET_NAME (example: aws-gateway-api-endpoints-fjkle421l-dev)
```sh
export ENDPOINTS_BUCKET_NAME=<bucket-name>
```

2. Install:
```sh
npm install
```

3. Deploy:
```sh
npm run deploy
```

## Results
* AWS infrastructure is deployed
* Endpoints S3 bucket is created
* Creating endpoints json-file and uploading it to S3 bucket is automated by hook
------

### Export endpoints-file
You may want to export endpoints json-files without deploying
```sh
npm run endpoints:export
```
The file is ./serverless/api-gateway-endpoints.json

### Upload endpoints-files
To upload exported endpoints-file
```sh
npm run endpoints:upload
```

