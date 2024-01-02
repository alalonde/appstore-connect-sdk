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
import type { AppPreOrderUpdateRequestData } from './AppPreOrderUpdateRequestData';
import {
    AppPreOrderUpdateRequestDataFromJSON,
    AppPreOrderUpdateRequestDataFromJSONTyped,
    AppPreOrderUpdateRequestDataToJSON,
} from './AppPreOrderUpdateRequestData';

/**
 * 
 * @export
 * @interface AppPreOrderUpdateRequest
 */
export interface AppPreOrderUpdateRequest {
    /**
     * 
     * @type {AppPreOrderUpdateRequestData}
     * @memberof AppPreOrderUpdateRequest
     */
    data: AppPreOrderUpdateRequestData;
}

/**
 * Check if a given object implements the AppPreOrderUpdateRequest interface.
 */
export function instanceOfAppPreOrderUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppPreOrderUpdateRequestFromJSON(json: any): AppPreOrderUpdateRequest {
    return AppPreOrderUpdateRequestFromJSONTyped(json, false);
}

export function AppPreOrderUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppPreOrderUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppPreOrderUpdateRequestToJSON(value?: AppPreOrderUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPreOrderUpdateRequestDataToJSON(value.data),
    };
}

