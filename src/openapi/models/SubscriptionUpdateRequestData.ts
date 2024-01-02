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
import type { SubscriptionUpdateRequestDataAttributes } from './SubscriptionUpdateRequestDataAttributes';
import {
    SubscriptionUpdateRequestDataAttributesFromJSON,
    SubscriptionUpdateRequestDataAttributesFromJSONTyped,
    SubscriptionUpdateRequestDataAttributesToJSON,
} from './SubscriptionUpdateRequestDataAttributes';
import type { SubscriptionUpdateRequestDataRelationships } from './SubscriptionUpdateRequestDataRelationships';
import {
    SubscriptionUpdateRequestDataRelationshipsFromJSON,
    SubscriptionUpdateRequestDataRelationshipsFromJSONTyped,
    SubscriptionUpdateRequestDataRelationshipsToJSON,
} from './SubscriptionUpdateRequestDataRelationships';

/**
 * 
 * @export
 * @interface SubscriptionUpdateRequestData
 */
export interface SubscriptionUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionUpdateRequestData
     */
    type: SubscriptionUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {SubscriptionUpdateRequestDataAttributes}
     * @memberof SubscriptionUpdateRequestData
     */
    attributes?: SubscriptionUpdateRequestDataAttributes;
    /**
     * 
     * @type {SubscriptionUpdateRequestDataRelationships}
     * @memberof SubscriptionUpdateRequestData
     */
    relationships?: SubscriptionUpdateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionUpdateRequestDataTypeEnum = {
    Subscriptions: 'subscriptions'
} as const;
export type SubscriptionUpdateRequestDataTypeEnum = typeof SubscriptionUpdateRequestDataTypeEnum[keyof typeof SubscriptionUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionUpdateRequestData interface.
 */
export function instanceOfSubscriptionUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionUpdateRequestDataFromJSON(json: any): SubscriptionUpdateRequestData {
    return SubscriptionUpdateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : SubscriptionUpdateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : SubscriptionUpdateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionUpdateRequestDataToJSON(value?: SubscriptionUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SubscriptionUpdateRequestDataAttributesToJSON(value.attributes),
        'relationships': SubscriptionUpdateRequestDataRelationshipsToJSON(value.relationships),
    };
}

