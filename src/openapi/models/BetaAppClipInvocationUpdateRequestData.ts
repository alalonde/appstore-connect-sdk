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
import type { BetaAppClipInvocationAttributes } from './BetaAppClipInvocationAttributes';
import {
    BetaAppClipInvocationAttributesFromJSON,
    BetaAppClipInvocationAttributesFromJSONTyped,
    BetaAppClipInvocationAttributesToJSON,
} from './BetaAppClipInvocationAttributes';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationUpdateRequestData
 */
export interface BetaAppClipInvocationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationUpdateRequestData
     */
    type: BetaAppClipInvocationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BetaAppClipInvocationAttributes}
     * @memberof BetaAppClipInvocationUpdateRequestData
     */
    attributes?: BetaAppClipInvocationAttributes;
}


/**
 * @export
 */
export const BetaAppClipInvocationUpdateRequestDataTypeEnum = {
    BetaAppClipInvocations: 'betaAppClipInvocations'
} as const;
export type BetaAppClipInvocationUpdateRequestDataTypeEnum = typeof BetaAppClipInvocationUpdateRequestDataTypeEnum[keyof typeof BetaAppClipInvocationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaAppClipInvocationUpdateRequestData interface.
 */
export function instanceOfBetaAppClipInvocationUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaAppClipInvocationUpdateRequestDataFromJSON(json: any): BetaAppClipInvocationUpdateRequestData {
    return BetaAppClipInvocationUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaAppClipInvocationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaAppClipInvocationAttributesFromJSON(json['attributes']),
    };
}

export function BetaAppClipInvocationUpdateRequestDataToJSON(value?: BetaAppClipInvocationUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaAppClipInvocationAttributesToJSON(value.attributes),
    };
}

