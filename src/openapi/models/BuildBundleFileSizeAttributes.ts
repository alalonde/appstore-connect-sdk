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
/**
 * 
 * @export
 * @interface BuildBundleFileSizeAttributes
 */
export interface BuildBundleFileSizeAttributes {
    /**
     * 
     * @type {string}
     * @memberof BuildBundleFileSizeAttributes
     */
    deviceModel?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildBundleFileSizeAttributes
     */
    osVersion?: string;
    /**
     * 
     * @type {number}
     * @memberof BuildBundleFileSizeAttributes
     */
    downloadBytes?: number;
    /**
     * 
     * @type {number}
     * @memberof BuildBundleFileSizeAttributes
     */
    installBytes?: number;
}

/**
 * Check if a given object implements the BuildBundleFileSizeAttributes interface.
 */
export function instanceOfBuildBundleFileSizeAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildBundleFileSizeAttributesFromJSON(json: any): BuildBundleFileSizeAttributes {
    return BuildBundleFileSizeAttributesFromJSONTyped(json, false);
}

export function BuildBundleFileSizeAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleFileSizeAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceModel': !exists(json, 'deviceModel') ? undefined : json['deviceModel'],
        'osVersion': !exists(json, 'osVersion') ? undefined : json['osVersion'],
        'downloadBytes': !exists(json, 'downloadBytes') ? undefined : json['downloadBytes'],
        'installBytes': !exists(json, 'installBytes') ? undefined : json['installBytes'],
    };
}

export function BuildBundleFileSizeAttributesToJSON(value?: BuildBundleFileSizeAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deviceModel': value.deviceModel,
        'osVersion': value.osVersion,
        'downloadBytes': value.downloadBytes,
        'installBytes': value.installBytes,
    };
}

