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
import type { BetaAppClipInvocationLocalizationUpdateRequestData } from './BetaAppClipInvocationLocalizationUpdateRequestData';
import {
    BetaAppClipInvocationLocalizationUpdateRequestDataFromJSON,
    BetaAppClipInvocationLocalizationUpdateRequestDataFromJSONTyped,
    BetaAppClipInvocationLocalizationUpdateRequestDataToJSON,
} from './BetaAppClipInvocationLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationUpdateRequest
 */
export interface BetaAppClipInvocationLocalizationUpdateRequest {
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationUpdateRequestData}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequest
     */
    data: BetaAppClipInvocationLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationUpdateRequest interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaAppClipInvocationLocalizationUpdateRequestFromJSON(json: any): BetaAppClipInvocationLocalizationUpdateRequest {
    return BetaAppClipInvocationLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaAppClipInvocationLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function BetaAppClipInvocationLocalizationUpdateRequestToJSON(value?: BetaAppClipInvocationLocalizationUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaAppClipInvocationLocalizationUpdateRequestDataToJSON(value.data),
    };
}

