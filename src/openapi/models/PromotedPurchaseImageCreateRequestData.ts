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
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import type { PromotedPurchaseImageCreateRequestDataRelationships } from './PromotedPurchaseImageCreateRequestDataRelationships';
import {
    PromotedPurchaseImageCreateRequestDataRelationshipsFromJSON,
    PromotedPurchaseImageCreateRequestDataRelationshipsFromJSONTyped,
    PromotedPurchaseImageCreateRequestDataRelationshipsToJSON,
} from './PromotedPurchaseImageCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface PromotedPurchaseImageCreateRequestData
 */
export interface PromotedPurchaseImageCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImageCreateRequestData
     */
    type: PromotedPurchaseImageCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof PromotedPurchaseImageCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {PromotedPurchaseImageCreateRequestDataRelationships}
     * @memberof PromotedPurchaseImageCreateRequestData
     */
    relationships: PromotedPurchaseImageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const PromotedPurchaseImageCreateRequestDataTypeEnum = {
    PromotedPurchaseImages: 'promotedPurchaseImages'
} as const;
export type PromotedPurchaseImageCreateRequestDataTypeEnum = typeof PromotedPurchaseImageCreateRequestDataTypeEnum[keyof typeof PromotedPurchaseImageCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the PromotedPurchaseImageCreateRequestData interface.
 */
export function instanceOfPromotedPurchaseImageCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function PromotedPurchaseImageCreateRequestDataFromJSON(json: any): PromotedPurchaseImageCreateRequestData {
    return PromotedPurchaseImageCreateRequestDataFromJSONTyped(json, false);
}

export function PromotedPurchaseImageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': PromotedPurchaseImageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function PromotedPurchaseImageCreateRequestDataToJSON(value?: PromotedPurchaseImageCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': PromotedPurchaseImageCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

