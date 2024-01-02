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
import type { AppCustomProductPageLocalization } from './AppCustomProductPageLocalization';
import {
    AppCustomProductPageLocalizationFromJSON,
    AppCustomProductPageLocalizationFromJSONTyped,
    AppCustomProductPageLocalizationToJSON,
} from './AppCustomProductPageLocalization';
import type { AppCustomProductPageLocalizationsResponseIncludedInner } from './AppCustomProductPageLocalizationsResponseIncludedInner';
import {
    AppCustomProductPageLocalizationsResponseIncludedInnerFromJSON,
    AppCustomProductPageLocalizationsResponseIncludedInnerFromJSONTyped,
    AppCustomProductPageLocalizationsResponseIncludedInnerToJSON,
} from './AppCustomProductPageLocalizationsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationResponse
 */
export interface AppCustomProductPageLocalizationResponse {
    /**
     * 
     * @type {AppCustomProductPageLocalization}
     * @memberof AppCustomProductPageLocalizationResponse
     */
    data: AppCustomProductPageLocalization;
    /**
     * 
     * @type {Array<AppCustomProductPageLocalizationsResponseIncludedInner>}
     * @memberof AppCustomProductPageLocalizationResponse
     */
    included?: Array<AppCustomProductPageLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppCustomProductPageLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationResponse interface.
 */
export function instanceOfAppCustomProductPageLocalizationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppCustomProductPageLocalizationResponseFromJSON(json: any): AppCustomProductPageLocalizationResponse {
    return AppCustomProductPageLocalizationResponseFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageLocalizationFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPageLocalizationsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppCustomProductPageLocalizationResponseToJSON(value?: AppCustomProductPageLocalizationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCustomProductPageLocalizationToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppCustomProductPageLocalizationsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

