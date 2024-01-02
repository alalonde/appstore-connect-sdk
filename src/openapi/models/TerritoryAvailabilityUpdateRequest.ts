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
import type { TerritoryAvailabilityUpdateRequestData } from './TerritoryAvailabilityUpdateRequestData';
import {
    TerritoryAvailabilityUpdateRequestDataFromJSON,
    TerritoryAvailabilityUpdateRequestDataFromJSONTyped,
    TerritoryAvailabilityUpdateRequestDataToJSON,
} from './TerritoryAvailabilityUpdateRequestData';

/**
 * 
 * @export
 * @interface TerritoryAvailabilityUpdateRequest
 */
export interface TerritoryAvailabilityUpdateRequest {
    /**
     * 
     * @type {TerritoryAvailabilityUpdateRequestData}
     * @memberof TerritoryAvailabilityUpdateRequest
     */
    data: TerritoryAvailabilityUpdateRequestData;
}

/**
 * Check if a given object implements the TerritoryAvailabilityUpdateRequest interface.
 */
export function instanceOfTerritoryAvailabilityUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function TerritoryAvailabilityUpdateRequestFromJSON(json: any): TerritoryAvailabilityUpdateRequest {
    return TerritoryAvailabilityUpdateRequestFromJSONTyped(json, false);
}

export function TerritoryAvailabilityUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryAvailabilityUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': TerritoryAvailabilityUpdateRequestDataFromJSON(json['data']),
    };
}

export function TerritoryAvailabilityUpdateRequestToJSON(value?: TerritoryAvailabilityUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': TerritoryAvailabilityUpdateRequestDataToJSON(value.data),
    };
}

