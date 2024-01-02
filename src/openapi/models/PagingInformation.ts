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
import type { PagingInformationPaging } from './PagingInformationPaging';
import {
    PagingInformationPagingFromJSON,
    PagingInformationPagingFromJSONTyped,
    PagingInformationPagingToJSON,
} from './PagingInformationPaging';

/**
 * 
 * @export
 * @interface PagingInformation
 */
export interface PagingInformation {
    /**
     * 
     * @type {PagingInformationPaging}
     * @memberof PagingInformation
     */
    paging: PagingInformationPaging;
}

/**
 * Check if a given object implements the PagingInformation interface.
 */
export function instanceOfPagingInformation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "paging" in value;

    return isInstance;
}

export function PagingInformationFromJSON(json: any): PagingInformation {
    return PagingInformationFromJSONTyped(json, false);
}

export function PagingInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagingInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paging': PagingInformationPagingFromJSON(json['paging']),
    };
}

export function PagingInformationToJSON(value?: PagingInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paging': PagingInformationPagingToJSON(value.paging),
    };
}

