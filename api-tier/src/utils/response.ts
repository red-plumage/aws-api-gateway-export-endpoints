export const httpJsonResponse = (statusCode: number, body?: any, headers?: any, baseEncocde?: boolean) => {
    return {
        statusCode,
        body: JSON.stringify(body),
        headers: {
            ...headers
        },
        isBase64Encoded: baseEncocde ?? false
    }
}
