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
import type { BuildBetaDetailUpdateRequestData } from './BuildBetaDetailUpdateRequestData';
import {
    BuildBetaDetailUpdateRequestDataFromJSON,
    BuildBetaDetailUpdateRequestDataFromJSONTyped,
    BuildBetaDetailUpdateRequestDataToJSON,
} from './BuildBetaDetailUpdateRequestData';

/**
 * 
 * @export
 * @interface BuildBetaDetailUpdateRequest
 */
export interface BuildBetaDetailUpdateRequest {
    /**
     * 
     * @type {BuildBetaDetailUpdateRequestData}
     * @memberof BuildBetaDetailUpdateRequest
     */
    data: BuildBetaDetailUpdateRequestData;
}

/**
 * Check if a given object implements the BuildBetaDetailUpdateRequest interface.
 */
export function instanceOfBuildBetaDetailUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BuildBetaDetailUpdateRequestFromJSON(json: any): BuildBetaDetailUpdateRequest {
    return BuildBetaDetailUpdateRequestFromJSONTyped(json, false);
}

export function BuildBetaDetailUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaDetailUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BuildBetaDetailUpdateRequestDataFromJSON(json['data']),
    };
}

export function BuildBetaDetailUpdateRequestToJSON(value?: BuildBetaDetailUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BuildBetaDetailUpdateRequestDataToJSON(value.data),
    };
}

