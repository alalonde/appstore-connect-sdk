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
 * @interface BuildBundleAttributes
 */
export interface BuildBundleAttributes {
    /**
     * 
     * @type {string}
     * @memberof BuildBundleAttributes
     */
    bundleId?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildBundleAttributes
     */
    bundleType?: BuildBundleAttributesBundleTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildBundleAttributes
     */
    sdkBuild?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildBundleAttributes
     */
    platformBuild?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildBundleAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BuildBundleAttributes
     */
    hasSirikit?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildBundleAttributes
     */
    hasOnDemandResources?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildBundleAttributes
     */
    hasPrerenderedIcon?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildBundleAttributes
     */
    usesLocationServices?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildBundleAttributes
     */
    isIosBuildMacAppStoreCompatible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildBundleAttributes
     */
    includesSymbols?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BuildBundleAttributes
     */
    dSYMUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BuildBundleAttributes
     */
    supportedArchitectures?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BuildBundleAttributes
     */
    requiredCapabilities?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BuildBundleAttributes
     */
    deviceProtocols?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BuildBundleAttributes
     */
    locales?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: string; }; }}
     * @memberof BuildBundleAttributes
     */
    entitlements?: { [key: string]: { [key: string]: string; }; };
}


/**
 * @export
 */
export const BuildBundleAttributesBundleTypeEnum = {
    App: 'APP',
    AppClip: 'APP_CLIP'
} as const;
export type BuildBundleAttributesBundleTypeEnum = typeof BuildBundleAttributesBundleTypeEnum[keyof typeof BuildBundleAttributesBundleTypeEnum];


/**
 * Check if a given object implements the BuildBundleAttributes interface.
 */
export function instanceOfBuildBundleAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildBundleAttributesFromJSON(json: any): BuildBundleAttributes {
    return BuildBundleAttributesFromJSONTyped(json, false);
}

export function BuildBundleAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bundleId': !exists(json, 'bundleId') ? undefined : json['bundleId'],
        'bundleType': !exists(json, 'bundleType') ? undefined : json['bundleType'],
        'sdkBuild': !exists(json, 'sdkBuild') ? undefined : json['sdkBuild'],
        'platformBuild': !exists(json, 'platformBuild') ? undefined : json['platformBuild'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'hasSirikit': !exists(json, 'hasSirikit') ? undefined : json['hasSirikit'],
        'hasOnDemandResources': !exists(json, 'hasOnDemandResources') ? undefined : json['hasOnDemandResources'],
        'hasPrerenderedIcon': !exists(json, 'hasPrerenderedIcon') ? undefined : json['hasPrerenderedIcon'],
        'usesLocationServices': !exists(json, 'usesLocationServices') ? undefined : json['usesLocationServices'],
        'isIosBuildMacAppStoreCompatible': !exists(json, 'isIosBuildMacAppStoreCompatible') ? undefined : json['isIosBuildMacAppStoreCompatible'],
        'includesSymbols': !exists(json, 'includesSymbols') ? undefined : json['includesSymbols'],
        'dSYMUrl': !exists(json, 'dSYMUrl') ? undefined : json['dSYMUrl'],
        'supportedArchitectures': !exists(json, 'supportedArchitectures') ? undefined : json['supportedArchitectures'],
        'requiredCapabilities': !exists(json, 'requiredCapabilities') ? undefined : json['requiredCapabilities'],
        'deviceProtocols': !exists(json, 'deviceProtocols') ? undefined : json['deviceProtocols'],
        'locales': !exists(json, 'locales') ? undefined : json['locales'],
        'entitlements': !exists(json, 'entitlements') ? undefined : json['entitlements'],
    };
}

export function BuildBundleAttributesToJSON(value?: BuildBundleAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bundleId': value.bundleId,
        'bundleType': value.bundleType,
        'sdkBuild': value.sdkBuild,
        'platformBuild': value.platformBuild,
        'fileName': value.fileName,
        'hasSirikit': value.hasSirikit,
        'hasOnDemandResources': value.hasOnDemandResources,
        'hasPrerenderedIcon': value.hasPrerenderedIcon,
        'usesLocationServices': value.usesLocationServices,
        'isIosBuildMacAppStoreCompatible': value.isIosBuildMacAppStoreCompatible,
        'includesSymbols': value.includesSymbols,
        'dSYMUrl': value.dSYMUrl,
        'supportedArchitectures': value.supportedArchitectures,
        'requiredCapabilities': value.requiredCapabilities,
        'deviceProtocols': value.deviceProtocols,
        'locales': value.locales,
        'entitlements': value.entitlements,
    };
}

