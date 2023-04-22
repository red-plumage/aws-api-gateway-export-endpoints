import { httpJsonResponse } from '../utils/response';
import { APIGatewayEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent, context: any) => {
    console.log('Hello POST');
    return httpJsonResponse(200, {message: 'HELLO POST'});
}