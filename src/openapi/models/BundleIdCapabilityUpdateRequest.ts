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
import type { BundleIdCapabilityUpdateRequestData } from './BundleIdCapabilityUpdateRequestData';
import {
    BundleIdCapabilityUpdateRequestDataFromJSON,
    BundleIdCapabilityUpdateRequestDataFromJSONTyped,
    BundleIdCapabilityUpdateRequestDataToJSON,
} from './BundleIdCapabilityUpdateRequestData';

/**
 * 
 * @export
 * @interface BundleIdCapabilityUpdateRequest
 */
export interface BundleIdCapabilityUpdateRequest {
    /**
     * 
     * @type {BundleIdCapabilityUpdateRequestData}
     * @memberof BundleIdCapabilityUpdateRequest
     */
    data: BundleIdCapabilityUpdateRequestData;
}

/**
 * Check if a given object implements the BundleIdCapabilityUpdateRequest interface.
 */
export function instanceOfBundleIdCapabilityUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BundleIdCapabilityUpdateRequestFromJSON(json: any): BundleIdCapabilityUpdateRequest {
    return BundleIdCapabilityUpdateRequestFromJSONTyped(json, false);
}

export function BundleIdCapabilityUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilityUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BundleIdCapabilityUpdateRequestDataFromJSON(json['data']),
    };
}

export function BundleIdCapabilityUpdateRequestToJSON(value?: BundleIdCapabilityUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BundleIdCapabilityUpdateRequestDataToJSON(value.data),
    };
}

