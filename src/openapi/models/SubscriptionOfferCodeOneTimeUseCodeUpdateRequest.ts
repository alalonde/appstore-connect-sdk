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
import type { SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData } from './SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData';
import {
    SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataFromJSON,
    SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataFromJSONTyped,
    SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataToJSON,
} from './SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeOneTimeUseCodeUpdateRequest
 */
export interface SubscriptionOfferCodeOneTimeUseCodeUpdateRequest {
    /**
     * 
     * @type {SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeUpdateRequest
     */
    data: SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeUpdateRequest interface.
 */
export function instanceOfSubscriptionOfferCodeOneTimeUseCodeUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionOfferCodeOneTimeUseCodeUpdateRequestFromJSON(json: any): SubscriptionOfferCodeOneTimeUseCodeUpdateRequest {
    return SubscriptionOfferCodeOneTimeUseCodeUpdateRequestFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeOneTimeUseCodeUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeOneTimeUseCodeUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionOfferCodeOneTimeUseCodeUpdateRequestToJSON(value?: SubscriptionOfferCodeOneTimeUseCodeUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataToJSON(value.data),
    };
}

