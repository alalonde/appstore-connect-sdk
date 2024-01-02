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
import type { SandboxTesterV2UpdateRequestData } from './SandboxTesterV2UpdateRequestData';
import {
    SandboxTesterV2UpdateRequestDataFromJSON,
    SandboxTesterV2UpdateRequestDataFromJSONTyped,
    SandboxTesterV2UpdateRequestDataToJSON,
} from './SandboxTesterV2UpdateRequestData';

/**
 * 
 * @export
 * @interface SandboxTesterV2UpdateRequest
 */
export interface SandboxTesterV2UpdateRequest {
    /**
     * 
     * @type {SandboxTesterV2UpdateRequestData}
     * @memberof SandboxTesterV2UpdateRequest
     */
    data: SandboxTesterV2UpdateRequestData;
}

/**
 * Check if a given object implements the SandboxTesterV2UpdateRequest interface.
 */
export function instanceOfSandboxTesterV2UpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SandboxTesterV2UpdateRequestFromJSON(json: any): SandboxTesterV2UpdateRequest {
    return SandboxTesterV2UpdateRequestFromJSONTyped(json, false);
}

export function SandboxTesterV2UpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTesterV2UpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SandboxTesterV2UpdateRequestDataFromJSON(json['data']),
    };
}

export function SandboxTesterV2UpdateRequestToJSON(value?: SandboxTesterV2UpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SandboxTesterV2UpdateRequestDataToJSON(value.data),
    };
}

