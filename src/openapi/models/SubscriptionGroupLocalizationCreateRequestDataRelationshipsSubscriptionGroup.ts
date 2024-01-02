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
import type { AppRelationshipsSubscriptionGroupsDataInner } from './AppRelationshipsSubscriptionGroupsDataInner';
import {
    AppRelationshipsSubscriptionGroupsDataInnerFromJSON,
    AppRelationshipsSubscriptionGroupsDataInnerFromJSONTyped,
    AppRelationshipsSubscriptionGroupsDataInnerToJSON,
} from './AppRelationshipsSubscriptionGroupsDataInner';

/**
 * 
 * @export
 * @interface SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup
 */
export interface SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup {
    /**
     * 
     * @type {AppRelationshipsSubscriptionGroupsDataInner}
     * @memberof SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup
     */
    data: AppRelationshipsSubscriptionGroupsDataInner;
}

/**
 * Check if a given object implements the SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup interface.
 */
export function instanceOfSubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSON(json: any): SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup {
    return SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppRelationshipsSubscriptionGroupsDataInnerFromJSON(json['data']),
    };
}

export function SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupToJSON(value?: SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppRelationshipsSubscriptionGroupsDataInnerToJSON(value.data),
    };
}

