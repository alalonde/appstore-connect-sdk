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
import type { CiTestResult } from './CiTestResult';
import {
    CiTestResultFromJSON,
    CiTestResultFromJSONTyped,
    CiTestResultToJSON,
} from './CiTestResult';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface CiTestResultResponse
 */
export interface CiTestResultResponse {
    /**
     * 
     * @type {CiTestResult}
     * @memberof CiTestResultResponse
     */
    data: CiTestResult;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CiTestResultResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CiTestResultResponse interface.
 */
export function instanceOfCiTestResultResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiTestResultResponseFromJSON(json: any): CiTestResultResponse {
    return CiTestResultResponseFromJSONTyped(json, false);
}

export function CiTestResultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiTestResultResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CiTestResultFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CiTestResultResponseToJSON(value?: CiTestResultResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CiTestResultToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

