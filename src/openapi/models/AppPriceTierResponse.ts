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
import type { AppPricePoint } from './AppPricePoint';
import {
    AppPricePointFromJSON,
    AppPricePointFromJSONTyped,
    AppPricePointToJSON,
} from './AppPricePoint';
import type { AppPriceTier } from './AppPriceTier';
import {
    AppPriceTierFromJSON,
    AppPriceTierFromJSONTyped,
    AppPriceTierToJSON,
} from './AppPriceTier';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppPriceTierResponse
 */
export interface AppPriceTierResponse {
    /**
     * 
     * @type {AppPriceTier}
     * @memberof AppPriceTierResponse
     * @deprecated
     */
    data: AppPriceTier;
    /**
     * 
     * @type {Array<AppPricePoint>}
     * @memberof AppPriceTierResponse
     */
    included?: Array<AppPricePoint>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppPriceTierResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppPriceTierResponse interface.
 */
export function instanceOfAppPriceTierResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPriceTierResponseFromJSON(json: any): AppPriceTierResponse {
    return AppPriceTierResponseFromJSONTyped(json, false);
}

export function AppPriceTierResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceTierResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppPriceTierFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppPricePointFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppPriceTierResponseToJSON(value?: AppPriceTierResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPriceTierToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppPricePointToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

