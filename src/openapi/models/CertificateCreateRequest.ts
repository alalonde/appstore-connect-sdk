/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CertificateCreateRequestData } from './CertificateCreateRequestData';
import {
    CertificateCreateRequestDataFromJSON,
    CertificateCreateRequestDataFromJSONTyped,
    CertificateCreateRequestDataToJSON,
} from './CertificateCreateRequestData';

/**
 * 
 * @export
 * @interface CertificateCreateRequest
 */
export interface CertificateCreateRequest {
    /**
     * 
     * @type {CertificateCreateRequestData}
     * @memberof CertificateCreateRequest
     */
    data: CertificateCreateRequestData;
}

/**
 * Check if a given object implements the CertificateCreateRequest interface.
 */
export function instanceOfCertificateCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CertificateCreateRequestFromJSON(json: any): CertificateCreateRequest {
    return CertificateCreateRequestFromJSONTyped(json, false);
}

export function CertificateCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CertificateCreateRequestDataFromJSON(json['data']),
    };
}

export function CertificateCreateRequestToJSON(value?: CertificateCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CertificateCreateRequestDataToJSON(value.data),
    };
}

