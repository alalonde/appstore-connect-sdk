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
import type { AppEventScreenshotCreateRequestDataRelationships } from './AppEventScreenshotCreateRequestDataRelationships';
import {
    AppEventScreenshotCreateRequestDataRelationshipsFromJSON,
    AppEventScreenshotCreateRequestDataRelationshipsFromJSONTyped,
    AppEventScreenshotCreateRequestDataRelationshipsToJSON,
} from './AppEventScreenshotCreateRequestDataRelationships';
import type { AppEventVideoClipCreateRequestDataAttributes } from './AppEventVideoClipCreateRequestDataAttributes';
import {
    AppEventVideoClipCreateRequestDataAttributesFromJSON,
    AppEventVideoClipCreateRequestDataAttributesFromJSONTyped,
    AppEventVideoClipCreateRequestDataAttributesToJSON,
} from './AppEventVideoClipCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppEventVideoClipCreateRequestData
 */
export interface AppEventVideoClipCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipCreateRequestData
     */
    type: AppEventVideoClipCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppEventVideoClipCreateRequestDataAttributes}
     * @memberof AppEventVideoClipCreateRequestData
     */
    attributes: AppEventVideoClipCreateRequestDataAttributes;
    /**
     * 
     * @type {AppEventScreenshotCreateRequestDataRelationships}
     * @memberof AppEventVideoClipCreateRequestData
     */
    relationships: AppEventScreenshotCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppEventVideoClipCreateRequestDataTypeEnum = {
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventVideoClipCreateRequestDataTypeEnum = typeof AppEventVideoClipCreateRequestDataTypeEnum[keyof typeof AppEventVideoClipCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppEventVideoClipCreateRequestData interface.
 */
export function instanceOfAppEventVideoClipCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppEventVideoClipCreateRequestDataFromJSON(json: any): AppEventVideoClipCreateRequestData {
    return AppEventVideoClipCreateRequestDataFromJSONTyped(json, false);
}

export function AppEventVideoClipCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppEventVideoClipCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppEventScreenshotCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppEventVideoClipCreateRequestDataToJSON(value?: AppEventVideoClipCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppEventVideoClipCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppEventScreenshotCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

