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
 * @interface BetaGroupCreateRequestDataAttributes
 */
export interface BetaGroupCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaGroupCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupCreateRequestDataAttributes
     */
    isInternalGroup?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupCreateRequestDataAttributes
     */
    hasAccessToAllBuilds?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupCreateRequestDataAttributes
     */
    publicLinkEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupCreateRequestDataAttributes
     */
    publicLinkLimitEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BetaGroupCreateRequestDataAttributes
     */
    publicLinkLimit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupCreateRequestDataAttributes
     */
    feedbackEnabled?: boolean;
}

/**
 * Check if a given object implements the BetaGroupCreateRequestDataAttributes interface.
 */
export function instanceOfBetaGroupCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function BetaGroupCreateRequestDataAttributesFromJSON(json: any): BetaGroupCreateRequestDataAttributes {
    return BetaGroupCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function BetaGroupCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'isInternalGroup': !exists(json, 'isInternalGroup') ? undefined : json['isInternalGroup'],
        'hasAccessToAllBuilds': !exists(json, 'hasAccessToAllBuilds') ? undefined : json['hasAccessToAllBuilds'],
        'publicLinkEnabled': !exists(json, 'publicLinkEnabled') ? undefined : json['publicLinkEnabled'],
        'publicLinkLimitEnabled': !exists(json, 'publicLinkLimitEnabled') ? undefined : json['publicLinkLimitEnabled'],
        'publicLinkLimit': !exists(json, 'publicLinkLimit') ? undefined : json['publicLinkLimit'],
        'feedbackEnabled': !exists(json, 'feedbackEnabled') ? undefined : json['feedbackEnabled'],
    };
}

export function BetaGroupCreateRequestDataAttributesToJSON(value?: BetaGroupCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'isInternalGroup': value.isInternalGroup,
        'hasAccessToAllBuilds': value.hasAccessToAllBuilds,
        'publicLinkEnabled': value.publicLinkEnabled,
        'publicLinkLimitEnabled': value.publicLinkLimitEnabled,
        'publicLinkLimit': value.publicLinkLimit,
        'feedbackEnabled': value.feedbackEnabled,
    };
}

