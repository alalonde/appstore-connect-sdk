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
import type { BundleIdPlatform } from './BundleIdPlatform';
import {
    BundleIdPlatformFromJSON,
    BundleIdPlatformFromJSONTyped,
    BundleIdPlatformToJSON,
} from './BundleIdPlatform';

/**
 * 
 * @export
 * @interface DeviceAttributes
 */
export interface DeviceAttributes {
    /**
     * 
     * @type {string}
     * @memberof DeviceAttributes
     */
    name?: string;
    /**
     * 
     * @type {BundleIdPlatform}
     * @memberof DeviceAttributes
     */
    platform?: BundleIdPlatform;
    /**
     * 
     * @type {string}
     * @memberof DeviceAttributes
     */
    udid?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceAttributes
     */
    deviceClass?: DeviceAttributesDeviceClassEnum;
    /**
     * 
     * @type {string}
     * @memberof DeviceAttributes
     */
    status?: DeviceAttributesStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof DeviceAttributes
     */
    model?: string;
    /**
     * 
     * @type {Date}
     * @memberof DeviceAttributes
     */
    addedDate?: Date;
}


/**
 * @export
 */
export const DeviceAttributesDeviceClassEnum = {
    AppleWatch: 'APPLE_WATCH',
    Ipad: 'IPAD',
    Iphone: 'IPHONE',
    Ipod: 'IPOD',
    AppleTv: 'APPLE_TV',
    Mac: 'MAC'
} as const;
export type DeviceAttributesDeviceClassEnum = typeof DeviceAttributesDeviceClassEnum[keyof typeof DeviceAttributesDeviceClassEnum];

/**
 * @export
 */
export const DeviceAttributesStatusEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED'
} as const;
export type DeviceAttributesStatusEnum = typeof DeviceAttributesStatusEnum[keyof typeof DeviceAttributesStatusEnum];


/**
 * Check if a given object implements the DeviceAttributes interface.
 */
export function instanceOfDeviceAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceAttributesFromJSON(json: any): DeviceAttributes {
    return DeviceAttributesFromJSONTyped(json, false);
}

export function DeviceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'platform': !exists(json, 'platform') ? undefined : BundleIdPlatformFromJSON(json['platform']),
        'udid': !exists(json, 'udid') ? undefined : json['udid'],
        'deviceClass': !exists(json, 'deviceClass') ? undefined : json['deviceClass'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'model': !exists(json, 'model') ? undefined : json['model'],
        'addedDate': !exists(json, 'addedDate') ? undefined : (new Date(json['addedDate'])),
    };
}

export function DeviceAttributesToJSON(value?: DeviceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'platform': BundleIdPlatformToJSON(value.platform),
        'udid': value.udid,
        'deviceClass': value.deviceClass,
        'status': value.status,
        'model': value.model,
        'addedDate': value.addedDate === undefined ? undefined : (value.addedDate.toISOString()),
    };
}

