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
 * @interface CiBuildRunCreateRequestDataAttributes
 */
export interface CiBuildRunCreateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof CiBuildRunCreateRequestDataAttributes
     */
    clean?: boolean;
}

/**
 * Check if a given object implements the CiBuildRunCreateRequestDataAttributes interface.
 */
export function instanceOfCiBuildRunCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunCreateRequestDataAttributesFromJSON(json: any): CiBuildRunCreateRequestDataAttributes {
    return CiBuildRunCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function CiBuildRunCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clean': !exists(json, 'clean') ? undefined : json['clean'],
    };
}

export function CiBuildRunCreateRequestDataAttributesToJSON(value?: CiBuildRunCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clean': value.clean,
    };
}

