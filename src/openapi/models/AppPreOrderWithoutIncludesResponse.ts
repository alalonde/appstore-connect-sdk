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
import type { App } from './App';
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppPreOrderWithoutIncludesResponse
 */
export interface AppPreOrderWithoutIncludesResponse {
    /**
     * 
     * @type {App}
     * @memberof AppPreOrderWithoutIncludesResponse
     */
    data: App;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppPreOrderWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppPreOrderWithoutIncludesResponse interface.
 */
export function instanceOfAppPreOrderWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPreOrderWithoutIncludesResponseFromJSON(json: any): AppPreOrderWithoutIncludesResponse {
    return AppPreOrderWithoutIncludesResponseFromJSONTyped(json, false);
}

export function AppPreOrderWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppPreOrderWithoutIncludesResponseToJSON(value?: AppPreOrderWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

