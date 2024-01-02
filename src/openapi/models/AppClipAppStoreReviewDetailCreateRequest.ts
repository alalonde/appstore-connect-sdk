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
import type { AppClipAppStoreReviewDetailCreateRequestData } from './AppClipAppStoreReviewDetailCreateRequestData';
import {
    AppClipAppStoreReviewDetailCreateRequestDataFromJSON,
    AppClipAppStoreReviewDetailCreateRequestDataFromJSONTyped,
    AppClipAppStoreReviewDetailCreateRequestDataToJSON,
} from './AppClipAppStoreReviewDetailCreateRequestData';

/**
 * 
 * @export
 * @interface AppClipAppStoreReviewDetailCreateRequest
 */
export interface AppClipAppStoreReviewDetailCreateRequest {
    /**
     * 
     * @type {AppClipAppStoreReviewDetailCreateRequestData}
     * @memberof AppClipAppStoreReviewDetailCreateRequest
     */
    data: AppClipAppStoreReviewDetailCreateRequestData;
}

/**
 * Check if a given object implements the AppClipAppStoreReviewDetailCreateRequest interface.
 */
export function instanceOfAppClipAppStoreReviewDetailCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppClipAppStoreReviewDetailCreateRequestFromJSON(json: any): AppClipAppStoreReviewDetailCreateRequest {
    return AppClipAppStoreReviewDetailCreateRequestFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipAppStoreReviewDetailCreateRequestDataFromJSON(json['data']),
    };
}

export function AppClipAppStoreReviewDetailCreateRequestToJSON(value?: AppClipAppStoreReviewDetailCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipAppStoreReviewDetailCreateRequestDataToJSON(value.data),
    };
}

