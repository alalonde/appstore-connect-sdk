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
import type { AppStoreVersionLocalizationUpdateRequestData } from './AppStoreVersionLocalizationUpdateRequestData';
import {
    AppStoreVersionLocalizationUpdateRequestDataFromJSON,
    AppStoreVersionLocalizationUpdateRequestDataFromJSONTyped,
    AppStoreVersionLocalizationUpdateRequestDataToJSON,
} from './AppStoreVersionLocalizationUpdateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionLocalizationUpdateRequest
 */
export interface AppStoreVersionLocalizationUpdateRequest {
    /**
     * 
     * @type {AppStoreVersionLocalizationUpdateRequestData}
     * @memberof AppStoreVersionLocalizationUpdateRequest
     */
    data: AppStoreVersionLocalizationUpdateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionLocalizationUpdateRequest interface.
 */
export function instanceOfAppStoreVersionLocalizationUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionLocalizationUpdateRequestFromJSON(json: any): AppStoreVersionLocalizationUpdateRequest {
    return AppStoreVersionLocalizationUpdateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionLocalizationUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionLocalizationUpdateRequestToJSON(value?: AppStoreVersionLocalizationUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionLocalizationUpdateRequestDataToJSON(value.data),
    };
}

