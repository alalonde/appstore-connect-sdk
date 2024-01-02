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
import type { BuildBundleFileSizeAttributes } from './BuildBundleFileSizeAttributes';
import {
    BuildBundleFileSizeAttributesFromJSON,
    BuildBundleFileSizeAttributesFromJSONTyped,
    BuildBundleFileSizeAttributesToJSON,
} from './BuildBundleFileSizeAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BuildBundleFileSize
 */
export interface BuildBundleFileSize {
    /**
     * 
     * @type {string}
     * @memberof BuildBundleFileSize
     */
    type: BuildBundleFileSizeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildBundleFileSize
     */
    id: string;
    /**
     * 
     * @type {BuildBundleFileSizeAttributes}
     * @memberof BuildBundleFileSize
     */
    attributes?: BuildBundleFileSizeAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BuildBundleFileSize
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BuildBundleFileSizeTypeEnum = {
    BuildBundleFileSizes: 'buildBundleFileSizes'
} as const;
export type BuildBundleFileSizeTypeEnum = typeof BuildBundleFileSizeTypeEnum[keyof typeof BuildBundleFileSizeTypeEnum];


/**
 * Check if a given object implements the BuildBundleFileSize interface.
 */
export function instanceOfBuildBundleFileSize(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BuildBundleFileSizeFromJSON(json: any): BuildBundleFileSize {
    return BuildBundleFileSizeFromJSONTyped(json, false);
}

export function BuildBundleFileSizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleFileSize {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BuildBundleFileSizeAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BuildBundleFileSizeToJSON(value?: BuildBundleFileSize | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BuildBundleFileSizeAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

